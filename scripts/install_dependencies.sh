#!/bin/bash

cd /opt/seeken-nuxt || exit 1

sudo chown -R ssm-user:ssm-user .

npm install >> /tmp/deploy.log 2>&1
npm run build >> /tmp/deploy.log 2>&1

echo "Deploy finished at $(date)" >> /tmp/deploy.log
