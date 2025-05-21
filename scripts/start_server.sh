#!/bin/bash


echo "Running app setup as ubuntu user..."
sudo runuser -l ubuntu -c '
  cd /home/ubuntu/seeken-nuxt
  rm -rf node_modules || true
  rm package-lock.json
  npm install
  npm run build
  pm2 delete all
  pm2 start npm --name "nuxt-app" -- run start
  pm2 save
'

echo "Restarting Nginx..."
systemctl restart nginx

echo "Deployment complete."
