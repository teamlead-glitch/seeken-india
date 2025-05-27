#!/bin/bash

# Ensure the directory and contents are owned by ubuntu
sudo chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

# Run installation, build, and restart as ubuntu
sudo -u ubuntu bash -c '
  cd /home/ubuntu/seeken-nuxt &&
  rm -rf node_modules .nuxt dist &&
  npm install &&
  npm run build &&
  pm2 restart nuxt-app --update-env
'
