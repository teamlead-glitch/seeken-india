#!/bin/bash

# Navigate to project directory
cd /home/ubuntu/seeken-nuxt

# Ensure correct ownership
chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

# Clean and stop existing PM2 apps
pm2 delete all || true

# Install dependencies
npm install

# Build the Nuxt application
npm run build

# Start the app using PM2
pm2 start .output/server/index.mjs --interpreter=node --name nuxt-app
pm2 save

# Restart NGINX
systemctl restart nginx