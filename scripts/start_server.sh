#!/bin/bash
cd /var/www/nuxt-app
pm2 delete nuxt-app || true
pm2 start .output/server/index.mjs --interpreter=node --name nuxt-app
pm2 save

