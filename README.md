# Intro to ReactJS

Welcome! This repo contains the source code for the slide deck we will use during the class, and is also where we will publish the code examples that we will create along the way.

For the second class, we will be using some more advanced tools for app development. The installation instructions follow.

## Setting up NodeJS

First check if you have node installed already
  - Open a Terminal or Command Prompt, and run: `node -v`
  - If you get an error, proceed to the installation instructions below for your platform.. otherwise skip down to the installation of create-react-app.

### MacOSX and Linux

I recommend using Node Version Manager so that you can easily update NodeJS later. If that's not your cup of tea, refer to the Windows instructions below, as there are installers for all platforms on the NodeJS website. The recommended setup with NVM can be installed as follows:

1. Run the following command to install Node Version Manager:
``` bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```
1. Restart the terminal app.
1. Run `nvm install 7`

### Windows

_Note: You will need to reboot your machine once the installation completes in order to use NodeJS, so be sure to save your work before installing._
1. Go to [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/)
1. Click on the link for Windows Installer
1. Follow the instructions in the installer.

## Installing create-react-app

1. Open a Terminal or Command Prompt.
1. Run the following command:
``` bash
npm install -g create-react-app
```
