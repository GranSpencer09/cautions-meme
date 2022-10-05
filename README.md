# Cautions-Meme

## Description

Creating this text editor allows the user keep track of everyday notes in an application they can install in their local computer to operate it offline. This single-page progressive web application specifically uses an IndexedDB database to track the user's notes. The app specifically uses IndexedDB to create an object store and includes both GET and PUT methods. Finally, the code is bundled with webpack and uses a service worker that caches static images.This app was an introduction to PWAs, webpack and service worked. I learned how to properly create a custom service worker and create a fully working PWA.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)

## Installation

    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.

## Usage

After downloading the code, to properly use the app, you'll need to run npm run install to collect all the neccessary packages. Then simple use the command, npm run start or npm run build to create the right distributable code needed to initially run the app. Open the app and use it while online, but if you'd like to use it offline, you'll need to install the application.

If you chose to use the Heroku link, you can move straight to installing or using the app online.

## Credits

Me and my classmates worked together to help one another through this more challenging assignment.

## Features

- Uses IndexedDB to create an object store and includes both GET and PUT methods
- The application works without an internet connection
- Automatically saves content inside the text editor when the DOM window is unfocused
- Bundled with webpack
- Create a service worker with workbox that Caches static assets
- The application should use babel in order to use async / await
- Application must have a generated manifest.json using the WebpackPwaManifest plug-in
- Can be installed as a Progressive Web Application
