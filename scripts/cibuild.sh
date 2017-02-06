#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

npm install
npm run build
