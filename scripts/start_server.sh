#!/bin/bash

LOGFILE="/var/log/seeken_deploy.log"

echo "=== Deployment started at $(date) ===" >> $LOGFILE 2>&1

echo "Killing PM2 daemons for ssm-user and root..." >> $LOGFILE 2>&1
sudo pkill -u ssm-user pm2 >> $LOGFILE 2>&1 || true
sudo pkill -u root pm2 >> $LOGFILE 2>&1 || true

echo "Changing ownership of /home/ubuntu/seeken-nuxt ..." >> $LOGFILE 2>&1
sudo chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt >> $LOGFILE 2>&1

echo "Running npm install, build and pm2 restart as ubuntu user..." >> $LOGFILE 2>&1
sudo -u ubuntu bash -c '
  cd /home/ubuntu/seeken-nuxt &&
  npm install >> '"$LOGFILE"' 2>&1 &&
  npm run build >> '"$LOGFILE"' 2>&1 &&
  pm2 restart nuxt-app --update-env >> '"$LOGFILE"' 2>&1
'

echo "=== Deployment finished at $(date) ===" >> $LOGFILE 2>&1
