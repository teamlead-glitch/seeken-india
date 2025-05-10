#!/bin/bash

runuser -l ubuntu -c '
cd /home/ubuntu/seeken-nuxt
pm2 delete all || true
npm install
npm run build
pm2 start .output/server/index.mjs --interpreter=node --name nuxt-app
pm2 save
'

systemctl restart nginx
