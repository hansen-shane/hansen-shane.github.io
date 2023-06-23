---
title: File Server Config
description: Overview of the file server config file
---
File Server uses the newer JSON-style config file, which will be named `appsettings.Production.json` or `appsettings.Development.json`
for local development.

## Logging
The logging section of the config file is used to configure the logging system. 
There's nothing special here, you can see <a href="https://docs.microsoft.com/aspnet/core/fundamentals/logging/#configure-logging" target="_blank">Microsoft's docs here</a>
for more information.

## File Server-specific Keys
- **SSL**: This should be set to true in production and can be set to false for development to make things a little easier if you need.
- **ControlDirectory**: This should be the base directory of the Cyrious Control file system. See [architecture](/file-server/files-controller/#directory-structure)
for an overview of how this should look.
- **ControlDirectoryUsername**: This should be the username of the user that has access to the Control file system. This is used to
  grant the process access to the file system.
- **ControlDirectoryPassword**: This should be the username of the user that has access to the Control file system. This is used to
grant the process access to the file system.
- **ConnectionStrings**
  - **ControlSync**: This is the connection string to the Control Sync database. This is required to get the necessary IdReference
mappings to convert Salesforce IDs to Control IDs
  - **Control**: This is the connection string to the Control database.
- **Salesforce**
  - **Username**: Control Sync's Salesforce username
  - **Password**: Control Sync's Salesforce password
  - **SecretKey**: Control Sync's Salesforce secret key (see [Control Sync Config](/control-sync/config/) for more details)
  - **Endpoint**: The SOAP endpoint for the Salesforce API.
