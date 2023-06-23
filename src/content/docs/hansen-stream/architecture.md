---
title: Hansen Stream
description: Overview of Hansen Stream
---
Hansen stream is the latest addition to the Control Sync suite. Hansen stream is responsible for connecting to all the
PushTopics in Salesforce that are configured by Control Sync, then it hosts a local TCP server that is connected to by Control
Sync which it pushes updates to as they come from Salesforce.

## Why a separate process?
All of this functionality used to be fully integrated into Control Sync, but had to be removed as the third party CometD
library that was used to connect to Salesforce seemingly stopped functioning. We suspect this was a change on Salesforce's
end, but we were unable to determine the cause. As a result, we had to move the Salesforce connection code into a separate
application that is run alongside Control Sync. The alternative to this would have required a massive .NET version upgrade
to all of Control Sync's modules all while Control Sync was completely broken in production.

## Start Up
Hansen stream is started up by Control Sync by a manager service that starts during Control Sync's startup. The manager
service is responsible for starting up Hansen stream, connecting to it, forwarding data to topic managers, and restarting/reconnecting
Hansen stream if it disconnects for some reason. Control Sync uses pm2 to start up Hansen stream, pm2 also monitors Hansen
stream and will restart it if it crashes automatically.

During the startup command, Control Sync also provides Hansen stream with a Salesforce bearer token for the Control Sync
application. This is required because the Salesforce streaming API requires a bearer token to connect to it.

## streams.json
Hansen stream uses a streams.json file to determine which PushTopics to connect to. This file is located in the same directory
as the Hansen stream executable. The streams.json file is a JSON array of strings that represent the PushTopic names to connect
to. The PushTopic names are the same as the names of the topics in Salesforce. The PushTopic names are case sensitive.

The names are prefixed with `/topic/`, so if you want to connect to a PushTopic named `MyTopic`, you would add the string
`/topic/MyTopic` to the streams.json file.
