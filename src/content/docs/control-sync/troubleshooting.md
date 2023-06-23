---
title: Control Sync Troubleshooting
description: Troubleshooting tips for Control Sync
---
Ideally, Control Sync should work without any issues. However, if you are experiencing issues, here are some troubleshooting tips.

## Identify which part of the process is broken
Hansen Control Sync is a multiple part process. It's crucial to identify which piece of it is broken. Here's a general
way to identify which piece may be broken, so you can further troubleshoot the correct part of the application.

### I can't see/upload files from Salesforce  
This is most likely an issue with `HansenControlSync.FileServer`. See the [FileServer troubleshooting](/file-server/troubleshooting/)
page for more help.

### Control isn't receiving any updates from Salesforce  
This could be Control Sync, but it could also be `hansen-stream`. `hansen-stream` is the responsible for
receiving all updates from Salesforce and sending them to Control Sync. See the [hansen-stream troubleshooting](/hansen-stream/troubleshooting/) page for
more help if you think this is the issue.

## Control isn't receiving any updates from Salesforce
If Control isn't receiving any updates from Salesforce and you've ruled out that it may be an issue with `hansen-stream`,
then it's likely an issue with Control Sync. Here are some things to check:
- Try updating different things. For example, if you're trying to update an opportunity, try a contact. If nothing is updating
then there's a larger issue at play.
- Check the [logs](/control-sync/architecture/#logging). This may seem obvious, but anything that's preventing Control Sync
from doing its job will probably reveal itself in the error or console logs.
- Run Control Sync yourself in a terminal. This might give you more insight into what's happening. To do this, just navigate
to the executable location in a terminal and manually run the executable. You may need to stop the service in the Windows
service manager first.


## Salesforce isn't receiving any updates from Cyrious Control
These suggestions will be pretty similar to the above, but `hansen-stream` isn't involved in this process at all. Updates
from Control to Salesforce are handled by the [`ControlDbPollService`](/control-sync/architecture/#data-synchronization-control-to-salesforce).
- Try updating different things. For example, if you're trying to update an opportunity, try a contact. If nothing is updating
then there's a larger issue at play.
- Check the [logs](/control-sync/architecture/#logging). This may seem obvious, but anything that's preventing Control Sync
from doing its job will probably reveal itself in the error or console logs.
- Run Control Sync yourself in a terminal. This might give you more insight into what's happening.
- Check the Control Sync database polling table. This is `[ControlSync].[dbo].[LastSync]` and should give you an idea of
if the polling service is still working as expected. If an exception is being thrown before the polling service can update
you'll see this table far behind and you should see the exceptions being logged to the error log.
