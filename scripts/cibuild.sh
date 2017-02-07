#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

echo "\033[1;34mListing current files\033[0m"
ls -lhaG

echo "\033[1;34mRemoving node_modules folder\033[0m"
rm -rf node_modules

echo "\033[1;34mInstalling lerna globally\033[0m"
npm install lerna@2.0.0-beta.36 -g

echo "\033[1;34mInstalling npm modules\033[0m"
npm install

echo "\033[1;34mRebuilding node-sass because ... magic\033[0m"
npm rebuild node-sass

echo "\033[1;34mFinally run build\033[0m"
npm run build
