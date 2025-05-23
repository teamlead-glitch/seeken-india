#!/bin/bash

echo "Running app setup as ubuntu user..."

sudo runuser -l ubuntu -c '
  cd /home/ubuntu/seeken-nuxt

  echo "Cleaning previous node modules and lock file..."
  rm -rf node_modules package-lock.json

  echo "Installing npm packages with legacy peer deps..."
  npm install 

  echo "Building Nuxt app..."
  npm run build

  echo "Restarting Nuxt with PM2..."
  pm2 restart nuxt-app
  pm2 start npm --name "nuxt-app" -- run start
  
'

echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "Deployment complete."
