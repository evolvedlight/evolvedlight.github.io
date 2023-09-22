---
title: Running MassTransit queues with KEDA
date: 2023-09-04
author: Stephen Brown
---

We have an interesting challenge in some of our microservices - we run lots and lots of microservices, all using a relatively small amount of memory, but the usage patterns may be unusual.
All these microservices talk MassTransit - some also have external triggers, API endpoints or scheduled jobs.
---

They run like this:
 - Most are processing constantly lots of small messages. These are no problem.
 - Some process only a few messages a day, but we have to keep the service running all day. This is annoying.
 - Some process only a few messages per day, but those small messages take a lot of CPU and memory. For example they may need to deal with files in memory in formats that don't yet easily support iteratively processing the file. This is a big problem for us as the services need to be sized to handle these large requirement, but are actually only running for a few minutes a day with this load.

This post will show one approach to fix the third problem. The same tooling (KEDA) can also be used to improve the other situations but that's for another blog post.
What we'll do to address the final problem is to use KEDA Job based scaling.

First, we have the publisher. This could be anything and in our example it's normally from a cron job. The send will look like this, all normal MassTransit code:

```c#
var endpoint = app.Services.GetRequiredService<IPublishEndpoint>();
endpoint.Publish(new ProcessVeryLargeFileTrigger(fileName)
```

`ProcessVeryLargeFileTrigger` is defined in an assembly that both producer and consumer can use.

Now, we need an entrypoint that allows us to read one message from the MassTransit queue (rabbit is used here), give it to MassTransit, then exit.

First, our entrypoint needs to have a masstransit consumer, in memory.

```c#

# Setup 
HostApplicationBuilder builder = Host.CreateApplicationBuilder(args);
builder.Services.AddMassTransit(x =>
{
    x.AddConsumer<ProcessVeryLargeFileConsumer>();

    x.UsingInMemory();
    x.AddConfigureEndpointsCallback((_, cfg) =>
    {
        # Optional, we like this format
        cfg.UseRawJsonSerializer(isDefault: true);
    });
});
```

Next, we need to connect and bind to a rabbit queue:

```c#
ConnectionFactory factory = new ConnectionFactory
{
  UserName = "<get this from appsettings>",
  Password = "<get this from appsettings>",
  VirtualHost = "/",
  HostName = "example.default"
};

IConnection conn = factory.CreateConnection();
IModel channel = conn.CreateModel();

# Your exchange and queues are likely different
var exchangeName = "LongRunningJobs";
var queueName = "LongRunningJobs";
var routingKey = "LongRunningJobs";
channel.ExchangeDeclare(exchangeName, ExchangeType.Direct);
channel.QueueDeclare(queueName, false, false, false, null);
channel.QueueBind(queueName, exchangeName, routingKey, null);
```

After this, we need to try and get a single message from Rabbit. If there's nothing here, we exit.

```c#
BasicGetResult message = channel.BasicGet("LongRunningJobs", false);
if (message == null) {
  // No message to pickup
  return;
}

```

We can then build our normal app and inject the RabbitMQ message into it:

```c#
var app = builder.Build();
await app.StartAsync();
using var scope = app.Services.CreateScope();
var ep = scope.ServiceProvider.GetRequiredService<ProcessVeryLargeFileConsumer<SubmitOrderConsumer>>();
```

Next, inject the message:
```c#
try
{
    var messageBytes = message.Body.ToArray()
    var headers = result.BasicProperties.Headers.AsReadOnly();
    await ep.Dispatch(result.Body.ToArray(), headers, CancellationToken.None);
    channel.BasicAck(result.DeliveryTag, false);
} 
catch 
{
    channel.BasicNack(result.DeliveryTag, false, true);
}
```

Finally, we can cleanup:
```c#
channel.Close();
conn.Close();
await app.StopAsync();
```

Of course, this is just the basics, your real solution would include logging and some other error handling (poison messages and so on should be handled, otherwise it will continue processing bad messages over and over).

This post now assumes you can build this into a docker image and push it to a registry you use. For this example, we'll assume the image name is `example-long:latest`

At this point, you have a working application that will pick up a single message, handle it, and finish. We need some way to trigger this to happen for each single message in the queue - for this comes KEDA.
First, you need a secret containing the RabbitMQ connection string:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: keda-rabbitmq-secret
  namespace: limited
data:
  host: >-
    <your base 64 encoded connection string>
type: Opaque
```

You need a trigger authentication:
```yaml
apiVersion: keda.sh/v1alpha1
kind: TriggerAuthentication
metadata:
  name: keda-trigger-auth-rabbitmq-conn
  namespace: limited
spec:
  secretTargetRef:
    - parameter: host
      name: keda-rabbitmq-secret
      key: host
```

And the important bit: you need a ScaledJob spec that runs your docker image
```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledJob
metadata:
  name: rabbitmq-consumer
  namespace: limited
spec:
  jobTargetRef:
    template:
      spec:
        containers:
        - name: example-long
          image: example-long:latest
          imagePullPolicy: Never
        restartPolicy: Never
    backoffLimit: 4
  pollingInterval: 2             # Optional. Default: 30 seconds
  maxReplicaCount: 30             # Optional. Default: 100
  successfulJobsHistoryLimit: 30   # Optional. Default: 100. How many completed jobs should be kept.
  failedJobsHistoryLimit: 20       # Optional. Default: 100. How many failed jobs should be kept.
  triggers:
  - type: rabbitmq
    metadata:
      queueName: LongRunningJobs
      queueLength: '1'
    authenticationRef:
      name: keda-trigger-auth-rabbitmq-conn
```

Now, when you put a message into the queue, it'll be processed as a MassTransit message in a Kubernetes Job, allowing you to run your normal worker pods with lower memory and CPU requirements.

You also have a few other benefits:
 - Deploys of the service don't kill a long running job
 - Jobs can be scheduled on other nodes
 - Jobs can be scheduled as lower priority