---
title: File Server Troubleshooting
description: Troubleshooting tips for the file server
---
Usually, the file server is pretty stable and doesn't require much maintenance. However, there are a few things that can 
go wrong and they're usually server configuration issues.

## The file view is loading but no files are showing
This can be caused by a number of issues, but is almost certainly a [config file](/file-server/config/) issue. Something in the config file is
probably incorrect. You'll wanna make sure the database connection strings, the NAS server IP, the Cyrious document path,
and the control directory username/password are all correct.

## The file view isn't loading
The nice thing about this issue is the browser usually tells you what's wrong. This is generally either an SSL issue or
the file server isn't running. If it's an SSL issue, you'll need to make sure the certificate is installed correctly and
the file server is configured to use it. You'll also want to make sure it's not expired, which the browser will usually 
tell you. If the file server isn't running, you'll need to start it and investigate why it crashed.

In my experience, usually when this is the problem, the HTTPS certificate is misconfigured or expired.
