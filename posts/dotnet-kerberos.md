---
title: Creating Kerberos secured connections from Dotnet on Linux
date: 2023-08-05
author: Stephen Brown
---

For the last few years at my workplace we've been using Kerberos authentication to connect to the on-prem SQL Server databases. On Windows this just worked like magic, as the services ran as a Windows domain user and so could connect to the database without any additional configuration. However, when moving to Kubernetes and Linux systems, this didn't work out of the box.

---

Our initial solution was following this [red hat blog post](https://cloud.redhat.com/blog/kerberos-sidecar-container) which details how to setup a sidecar which keeps a kerberos token valid. This worked for a number of years but did have some problems:

 - We ran 100+ containers and each needed a sidecar - this cost a few gigabytes of memory and some CPU allowance
 - When the token was being refreshed, it was not available for a few milliseconds
 - It was extra hassle and created slightly larger deployments and more complex Deployment configs.

When investigating a seperate issue (dotnet 7 caused some transient kerberos faults) we realised that actually the whole sidecar approach was completely unneccessary! This post will give the minimum you actually need to call Keberos services from Linux

1) You'll need to add the keberos tools to your docker image. Maybe you have a base image you share, maybe not. For alpine images:

```RUN apk add --no-cache krb5```

2) You'll need to have a krb5 configuration that points to your domain controller. Microsoft has an [example](https://learn.microsoft.com/en-us/sql/connect/jdbc/using-kerberos-integrated-authentication-to-connect-to-sql-server?view=sql-server-ver16#creating-a-kerberos-configuration-file)

For example, ours looks like this:

```
[logging]
default

[libdefaults]
...standard things here
default_client_keytab_name=/krb5/client.keytab
default_keytab_name=/krb5/krb5.keytab
default_ccache_name=FILE:/dev/shm/ccache
default_realm = EXAMPLE.COM

[realms]
EXAMPLE.COM = {
    kdc = ADS.EXAMPLE.COM:88
}
```

You can then add this to the docker image like
```
RUN mkdir /krb5 && mkdir /customkrb5
COPY krb5.conf /customkrb5/krb5.conf
ENV KRB5_CONFIG=/customkrb5/krb5.conf
```

We put it in a custom folder as some container systems have the limitation that mounting a directory overrides all files in that directory (we'll do this later)

3) You then need a keytab added to the image. You will probably want this done at runtime. Get a keytab (maybe off your AD system administrators, maybe you create it yourself with ktutil) and make sure this ends up at /krb5/client.keytab. We use kubernetes secrets and volume mounts for this

4) Connect to the database using `Integrated Security=true`. This should now just work. You can check by calling `klist` inside the container to see that it has a ticket