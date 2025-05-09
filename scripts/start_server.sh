#!/bin/bash
cd /home/ubuntu/nuxt-app/seeken-nuxt
pm2 delete nuxt-app || true
npm install
npm run build
pm2 start .output/server/index.mjs --interpreter=node --name nuxt-app
pm2 save
systemctl restart nginx

