# Code In the Dark @ [Interlogica](https://www.interlogica.it)

This repository contains the code for the [Code In the Dark](https://codeinthedark.interlogica.it) event held in Mestre (VE).

## Main Server
The main server is a node.js application that serves all the APIs needed for the clients to join and get the actual state of the game. The source code can be found in the server folder.

### Deploy

The deploy is done on bare metal on a linux based server. You need to have `git` and `node` installed (use nvm!) on the remote machine . `pnpm` is used to install the dependencies.

```bash
cd server 

# first time only
./node_modules/.bin/pm2 deploy production setup

npm run deploy
```

### Local Development

#### Installation
```bash
cd server
npm install
```

#### Running
```bash
npm start
```


## Viewer
The viewer is an Angular application that is projected on a big screen during the event. The source code can be found in the viewer folder.

### Deploy
To deploy the application, just put it in a s3 bucket and set the bucket as a static website.
There should be a `deploy.sh` script in the `viewer` folder that does this for you.

### Installation
```bash
cd viewer
npm install
```

### Running
```bash
npm start
```

## Rating
The rating app serves a web application needed by the attendees to rate the layouts created during the game. The source code can be found in the rating folder.

The app comes in two versions, but only v1 has been tested and utilised.


### Installation
No installation needed

### Running
Just run a static web server on rating/v1 folder, with whatevere technology you prefer.

Example in python:
```bash
cd rating/v1
python3 -m http.server
```

### Deploy
To deploy the application, just put it in a s3 bucket and set the bucket as a static website.
There should be a `deploy.sh` script in the `rating` folder that does this for you.

## Editor

The editor is an updated and modified fork of the [original editor](https://github.com/codeinthedark/editor) editor.

### Installation

```bash
cd server
npm install
```

### Local dev

```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy
To deploy the application, just put it in a s3 bucket and set the bucket as a static website.
There should be a `deploy.sh` script in the `editor` folder that does this for you.