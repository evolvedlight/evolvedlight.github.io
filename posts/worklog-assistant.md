---
title: Creating Worklog Assistant - the background
date: 2024-10-05
author: Stephen Brown
---

This project started as a replacement for an existing tool called Worklog Assistant. This is a tool that can log time spent on JIRA tasks and was used quite intensively by my company. It cost some reasonable amount of money, and did a relatively simply job quite well. However, this year, everything related to this company disappeared from the internet. The JIRA confluence pages disappeared, the Twitter/X feed is gone, the website is gone, and the tool is good. I have no idea what happened, but all the license payers are left with a tool that will stop working at some point in the future as the licenses expire.

So - I set about creating my own tool - and the result is https://worklogassistant.app/
It's written in Flutter for cross platform compatibility and is installed or run from your desktop without needing any dependencies installed (for ease of use in Corporate environments).
It's _blazingly_ fast, and is catching up with what the old platform did. It's not quite there yet, but it's getting there.

The next series of blog posts will be about the journey of creating this tool.

I expect to cover the following:

- The initial design
- The implementation and flutter learning experience
- The Github Actions build pipeline
- The public website

Hopefully this will show the process of creating a tool from scratch, and the setup needed to ensure that it's maintainable and can be built and deployed easily.

Currently the tool isn't open source, and the billing isn't implemented - the billing will come soon.
Open source - likely not; however the process for building it will be documented here.

![udpxy](/images/worklog-assistant-darkmode.png)