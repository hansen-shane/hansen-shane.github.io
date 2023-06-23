---
title: Control Sync File Server
description: Overview of the file server app
---
When we refer to file server, we're referring to the combination of the .NET API and Angular web app that creates the file
system view available from Salesforce that allows users to upload and download files directly to Control from Salesforce.

The goal of file server is to allow sales employees to upload required documents for other employees - such as design
documentation - as well as download documents that they may need access to for their work, all from the comfort of Salesforce.

In order to meet our goal, we created a web app in Angular and an API in .NET, which work together to allow users to navigate
the Cyrious Control file system. Then we created a Salesforce Lightning Component that embeds the web app in Salesforce.
Along with the embed, we include the user's token in the embed URL, which we can use to verify that the request is coming
from a valid Salesforce user. This allows us to restrict access to the file system to only those who are logged in to Salesforce.

## Single Page Application
The file server web app is a single page application (SPA) built in Angular. This means that the entire app is loaded
when the user first navigates to the page, and then the app handles all navigation and data loading from there. This
is in contrast to a traditional web app, where each page is loaded separately from the server.

This is why the `FileNotFoundController` will return the index page instead of a normal 404 error. Since the app is
a single page, we want to return the index page for any request that doesn't match a route, so that the Angular app
can handle the request and display the correct page.

## Security
The file server is secured by a combination of Salesforce and the file server API. The Salesforce Lightning Component
that embeds the file server web app in Salesforce will only work if the user is logged in to Salesforce. This is because
the Lightning Component will only work if the user is logged in to Salesforce, and the Lightning Component is the easiest
way to access the file server web app.

Technically, the file server web app can be accessed directly, but it will not work unless it receives a valid Salesforce
sessions token, which is included in the embed URL by the lightning component and then checked by the API in `FilesController.ValidKey`.
During debugging, this method always returns true, but in production it will check the Salesforce session token against
the Salesforce API to ensure that the user is logged in to Salesforce before allowing any requests to succeed.
