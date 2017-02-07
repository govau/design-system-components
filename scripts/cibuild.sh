#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

echo "Listing current files"
ls -lhaG

echo "\nRemoving node_modules folder"
rm -rf node_modules

echo "\nInstalling lerna globally"
npm install lerna@2.0.0-beta.36 -g

echo "\nInstalling npm modules"
npm install

echo "\nRebuilding node-sass because ... magic"
npm rebuild node-sass

echo "\nFinally run build"
npm run build
