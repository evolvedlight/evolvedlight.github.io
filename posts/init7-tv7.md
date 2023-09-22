---
title: TV7 (IPTV from Init7) with Dream Machine and Unity Dream machine
date: 2023-08-04
author: Stephen Brown
---

If you're an Init7 TV customer and you want to use the Unify Dream Machine as your IPTV receiver, I figured it out for you! Here's a step-by-step guide to help you get started.

---

## Step 1: Update to the Newest Dream Machine

Before you begin, make sure your Unify Dream Machine is updated to the latest firmware version. You can check for updates by logging into the Unify Dream Machine web interface and navigating to the "Settings" page.
Your version needs to be higher than ["UniFi Network Application 7.4.156"](https://community.ui.com/releases/UniFi-Network-Application-7-4-156/15ac6260-9cd1-4ac3-a91c-4880c1c87882).

## Step 2: Enable the feature

You now have a new setup that you can do on the Network application:

![udpxy](/images/network-iptv.png)

You can also see the [basic unifi docs](https://help.ui.com/hc/en-us/articles/14957610078615-UniFi-Gateway-IGMP-Proxy-IPTV-#:~:text=How%20Does%20it%20Work%3F,box%20that%20receives%20the%20traffic.)

You should now already be able to watch TV7 though VLC using this link: https://www.init7.net/en/support/faq/TV-andere-Geraete/

![udpxy](/images/vlc-tv7.png)

However, I wanted to watch on a Samsung TV and none of the apps supported these multicast IPTV streams. So, I had to:

## Step 3: Install agrrh-udpxy.

I installed this as a docker image on a syntology NAS.

The following settings worked for me:
image: agrrh/udpxy:latest
network: host
cmd: -v -T -p 4022

You can then go to your nas drive on port 4022, URL /status. For example mine is http://nasdrive:4022/status and I see:

![udpxy](/images/udpxy.png)

## Step 4: Create your own playlist that forwards to your udprxy instance instead of the original network stream

You can do this by opening up the m3u file and relacing the URLs with the link to your local instance. For example, mine is here:
https://gist.github.com/evolvedlight/e9b2a0145840ba5385478a3075aa815a

## Step 5: Open this in a IPTV app.

Personally I used one called "m3u player" but there are many out there. You'll then also be able to go to your udpxy status page and see the running stream there.