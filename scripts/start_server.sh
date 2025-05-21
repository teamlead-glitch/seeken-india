#!/bin/bash

echo "Changing ownership of project files to ubuntu user..."
chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

echo "Checking owner of the project directory:"
ls -ld /home/ubuntu/seeken-nuxt

echo "Checking owner of key files:"
ls -l /home/ubuntu/seeken-nuxt/package.json
ls -l /home/ubuntu/seeken-nuxt/test.sh

echo "Running app setup as ubuntu user..."
runuser -l ubuntu -c '
  cd /home/ubuntu/seeken-nuxt
  echo "Installing dependencies..."
  npm install

  echo "Building the Nuxt app..."
  npm run build

  echo "Stopping any existing PM2 processes..."
  pm2 delete all || true

  echo "Starting Nuxt app with PM2..."
  pm2 start npm --name "nuxt-app" -- run start

  echo "Saving PM2 process list..."
  pm2 save
'

echo "Restarting Nginx..."
systemctl restart nginx

echo "Deployment complete."
