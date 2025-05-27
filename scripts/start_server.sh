#!/bin/bash

# Ensure the directory and contents are owned by ubuntu
sudo chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

# Run installation, build, and start as ubuntu
sudo -u ubuntu bash -c "
  cd /home/ubuntu/seeken-nuxt &&
  npm install &&
  npm run build &&
  pm2 stop nuxt-app || true &&
  pm2 start nuxt-app --update-env
"
