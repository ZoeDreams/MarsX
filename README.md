# MarsX

A game about colonizing mars that is built with **Lume** and **Electron**

## Overview

This game is an isometric 2d real time strategy game about colonizing Mars. Players will attempt to create and maintain a colony on Mars through exploring, crafting, building, trading. In order to survive the harsh environment of Mars, players will need to work together to maintain a sustainable world.

The game world will be a persistent shared multiplayer world that is separated into various quandrants and sectors.
Martian colonists will be able to apply for a permanent deeds to their properties which give special permissions within the Martian society.

The game world will be to as scale as possible to actual Mars using satellite imaging data. We will use this data to generate the base tilemap world. Each tilemap will consist of a chunk of the world which is streamed over a socket.io game world server.

## Purpose

This project is meant to be a fun way to create a complex working implementation of the [**Lume**](https://lume.io/) toolkit that simplifies the creation of rich and interactive 2D or 3D experiences for any device from mobile to desktop to AR/VR. Our implementation will demonstrate how awesome Lume works within a desktop environment using electron.

## Art Style

The art style will be using Magic Voxel style pixel art, but rendered as 3D. The hopes is to be able to bring lighting and 3d depth shaders to pixel art developed with a 3d editor like Magic Voxel. The art is to look more like a retro game such as X-Com, and less blocky then Minecraft. The UI overlay should utilize a futuristc line style similiar to what interfaces on a spaceship would look like.

## Getting Involved

This is an open source game with dreams of being distributed onto Steam one day. We are looking for help with:

-   artists to help create 2d pixel art concept of the world map of mars
-   artists to use magic voxel to generate 3d voxel tile game objects for the system to render
-   programmers to help implement the event and rendering engines for the scenes
-   UI artists and programmers to help create the UI overlay
-   programmers and artists to help develop the intro screen
-   devops and programmer to figure out the release pipeline for stream and updates.

## Getting Started

The game uses typescript to compile the source code into runtime code. This code is then bundled using webpack. After the code is built we can load and run it within electon's `BrowserWindow` class of our main entry point of the application. During development this code is hosted on a local http server, rather then accessing the code and asset's via `file://` locations

### Setup

The project currently uses `node` version 14.15.1 and `npm` version 6.14.8. We also use `yarn` for package management. You can install `yarn` with the following command:

```sh
npm install --global yarn
```

This project relys on [`electron-forge`](https://www.electronforge.io/) to make, distribute, and publish the project. Its also a good idea to read about how our 3d graphics engine, [`Lume`](https://lume.io/docs/#/), works. This library provides us with a html interface to solid.js

### Running

To start the game in dev mode use the following command:

```sh
# can also use `yarn .` as alias
yarn dev
```

### Hot Reloading

To reload the app after some changes enter `rs` in the terminal that you ran the `yarn dev` command in. This will force the HWR to use the newly built sources. Because of how the main process and renderer are loaded with webpack, the new module is not recognized by the one running.

### Build Distributables

You are not able to cross-compile a Mac version as Windows, and vice verses. The game is compiled to the flavor of operating system you are using. Meaning if you make the game on MacOS it will create a _dmg_, and if on Windows a _.exe_. To create a production version of the game run the following command:

```sh
yarn make
```

Alternatively you can make and package the project for distribution using the following command

```sh
yarn package
```

### Staging Changes

To simplify formating the code, checking for errors, and adding to our git changes, there is a convinence script you can run that does this:

```sh
yarn stage
```

This will prettify, lint, and `git add .` your files to the current commit in progress. When happy with your changes, push to a branch, and make a pull request for review. An invite will be sent out to join as a contributor for any valid PR submitted. `~Thank You~`

## TODO

-   [x] configure and test electron dependency
-   [x] utilize electron-forge
-   [x] add typescript support
-   [ ] add support for **JSX**
-   [ ] add lume graphics engine
-   [ ] make canvas scale to the entire window
-   [ ] create simple `HelloLume` app
-   [ ] integrate github as our autoupdate hose; support `yarn publish`
-   [ ] setup unit testing with **Mocha**
-   [x] **FIX:** hot deployment _[HWR]_ for webpack
-   [ ] figure out sometype of simple tilemap
-   [ ] implement tilemap navigation controls
-   [ ] test production autoupdate service though github
-   [ ] add event bus for IPC main process routing
-   [ ] add lokijs for main process database
-   [ ] **EPIC:** create socket.io RESTful server for multiplayer
-   [ ] add socket.io for serving up the game world
-   [ ] use socket.io to share location of players
-   [ ] create icon set for the game to use.
