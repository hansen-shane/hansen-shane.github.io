---
title: Hansen Stream Troubleshooting
description: Troubleshooting tips for Hansen Stream
---
Up to this point, I've never heard of Hansen Stream having any issues, but if it does then I think the best course of action
would be checking the pm2 logs for it. 

<a href="https://pm2.keymetrics.io/" target="_blank">pm2</a> automatically tracks logs for processes running through and that should give
you an idea of what's going on. You can check the logs by running `pm2 logs` in the windows terminal.
