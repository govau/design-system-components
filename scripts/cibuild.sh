#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

ls
rm -rf node_modules
ls
npm install lerna@2.0.0-beta.36 -g
npm install
npm rebuild node-sass
npm run build
