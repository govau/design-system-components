#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

echo "==== Listing current files ===="
ls -lhaG

echo "==== Removing node_modules folder ===="
rm -rf node_modules

echo "==== Installing lerna globally ===="
npm install lerna@2.0.0-beta.36 -g

echo "==== Installing npm modules ===="
npm install

echo "==== Rebuilding node-sass because ... magic ===="
npm rebuild node-sass

echo "==== Finally run build ===="
npm run build
