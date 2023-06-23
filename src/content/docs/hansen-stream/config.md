---
title: Hansen Stream Config
description: Configuring Hansen Stream
---

The Hansen Stream config file only exposes two values:
- **port**: This is the TCP port that Control Sync will try to connect to and listen on
- **boundIp**: This is the IP address that the TCP server will bind to. This should probably only ever be `127.0.0.1`, 
but I exposed it in case it needed to change for some reason in the future.

In addition to the config, Hansen stream takes a few command line arguments. The first parameter is the Salesforce bearer
token that is used to connect to Salesforce. The second parameter is the URL for the Salesforce streaming API.
