---
title: File Server Web View
description: Overview of the file server web view
---
The file server web view is an Angular 4 app that allows users to navigate the Cyrious Control file system for the estimate 
or order that they're looking at and upload, download, and delete files using the file server API.

The web view was designed to be embedded in Salesforce using a Lightning Component and mostly blend in with the Salesforce 
UI. The view tries to emulate a remote file explorer and allow the user to navigate the file system as they would through
Cyrious Control.

There's not much to say about the web view, since it's just a UI for the API. The only thing to note is that the web view
is a single page application (SPA), which means that the entire app is loaded when the user first navigates to the page,
and then the app handles all navigation and data loading from there. This is in contrast to a traditional web app, where
each page is loaded separately from the server.

You'll find the code for the web view in `HansenControlSync.FileServer.Client`.
