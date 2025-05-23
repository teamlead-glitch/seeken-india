#!/bin/bash

sudo -u ubuntu bash -c "cd /home/ubuntu/seeken-nuxt && npm install"
sudo -u ubuntu bash -c "cd /home/ubuntu/seeken-nuxt && npm run build"
sudo -u ubuntu bash -c "cd /home/ubuntu/seeken-nuxt && pm2 start npm --name "nuxt-app" -- run start"