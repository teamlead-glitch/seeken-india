#!/bin/bash
cd /home/ubuntu/nuxt-app
pm2 delete nuxt-app || true
npm run build
pm2 start .output/server/index.mjs --interpreter=node --name nuxt-app
pm2 save
systemctl restart nginx

