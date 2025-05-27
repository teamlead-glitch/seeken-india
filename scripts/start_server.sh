#!/bin/bash

# Kill PM2 daemons running as ssm-user and root (to avoid conflicts)
sudo pkill -u ssm-user pm2 || true
sudo pkill -u root pm2 || true

# Ensure directory ownership
sudo chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

# Run install, build and restart pm2 as ubuntu user
sudo -u ubuntu bash -c '
  cd /home/ubuntu/seeken-nuxt &&
  npm install &&
  npm run build &&
  pm2 restart nuxt-app --update-env
'
