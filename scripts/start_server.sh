#!/bin/bash

# Ensure the directory and contents are owned by ubuntu
sudo chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

# Run installation, build, and start as ubuntu
sudo -u ubuntu bash -c "cd /home/ubuntu/seeken-nuxt && npm install"
sudo -u ubuntu bash -c "cd /home/ubuntu/seeken-nuxt && npm run build"
sudo -u ubuntu bash -c "cd /home/ubuntu/seeken-nuxt && pm2 restart nuxt-app"