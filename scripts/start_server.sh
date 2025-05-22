#!/bin/bash

echo "Running app setup as ubuntu user..."

sudo runuser -l ubuntu -c '
  cd /home/ubuntu/seeken-nuxt

  echo "Cleaning previous node modules and lock file..."
  rm -rf node_modules package-lock.json

  echo "Installing npm packages with legacy peer deps..."
  npm install --legacy-peer-deps

  echo "Building Nuxt app..."
  npm run build

  echo "Restarting Nuxt with PM2..."
  pm2 delete all || true
  pm2 start npm --name "nuxt-app" -- run start
  pm2 save
'

echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "Deployment complete."
