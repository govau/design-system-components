#!/usr/bin/env bash

# Exit immediately if any commands return non-zero
set -e

# download cf-cli
curl -v -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&source=github'
sudo dpkg -i cf-cli_amd64.deb
cf -v

# check for staging flag
if [[ $* == *--staging* ]]
then
	# push with staging vars
	cf login -a https://api.system.staging.digital.gov.au -o $CF_ORG_STAGING -s $CF_SPACE_STAGING -u $CF_USER_STAGING -p $CF_PASSWORD_STAGING
	cf target -o $CF_ORG_STAGING -s $CF_SPACE_STAGING
	cf push
else
	# push with prod vars
	cf login -a https://api.system.staging.digital.gov.au -o $CF_ORG_PROD -s $CF_SPACE_PROD -u $CF_USER_PROD -p $CF_PASSWORD_PROD
	cf target -o $CF_ORG_PROD -s $CF_SPACE_PROD
	cf push
fi
