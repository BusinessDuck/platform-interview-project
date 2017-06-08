# Spongecell Interview Project

## Overview

Among other things, we here at Spongecell build ads.  In this exercise, you're tasked with building a small application that produces an ad from a JSON input.  You should use the existing build system in this repository to run a server for local development.

For our purposes, ads have two constructs - screens and elements.  A screen is a container of elements and represents what is visible in the ad at a certain state.

An element is an object within the screen.  For this exercise, there will only be two types of elements - image and text.  As you can see in the JSON settings, the image has a masterAssetId property that corresponds to the assets in the response.


## Task

`http://localhost:3000/assets/ad.json`

Your application must fetch JSON from the above URL and assemble a basic ad as HTML. Image elements should load their corresponding assets and text should be displayed according to the style specified in the element settings (hint: not all data within the JSON will be relevant to this task).

## Requirements:
- node^6.3.0 ( can be installed via Homebrew with 'brew install node' or [install manually](https://nodejs.org/en/))

## Setup
- npm install 
- npm run serve (available at http://localhost:3000)
