#!/bin/bash

sudo chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt 

sudo -u ubuntu bash -c '
  cd /home/ubuntu/seeken-nuxt &&
  npm install  &&
  npm run build &&
  pm2 restart nuxt-app --update-env 
'