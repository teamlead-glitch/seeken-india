#!/bin/bash

runuser -l ubuntu -c '
cd /home/ubuntu/seeken-nuxt
pm2 delete all || true
npm install
npm run build
pm2 start npm --name "nuxt-app" -- run start
pm2 save
'

systemctl restart nginx
