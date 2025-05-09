#!/bin/bash


# 🔧 Force ownership to ubuntu
chown -R ubuntu:ubuntu /home/ubuntu/seeken-nuxt

# 🔁 Switch to ubuntu user for everything else
sudo -u ubuntu -H bash <<EOF
cd /home/ubuntu/seeken-nuxt
pm2 delete all || true
npm install
npm run build
pm2 start .output/server/index.mjs --interpreter=node --name nuxt-app
pm2 save
EOF

# 🔁 Restart nginx as root (needed for system-level service)
systemctl restart nginx
