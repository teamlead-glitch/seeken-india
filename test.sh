#!/bin/bash
sudo rm -rf /opt/seeken-nuxt
sudo mkdir /opt/seeken-nuxt
sudo unzip /opt/seeken-nuxt-tmp/build_output.zip -d /opt/seeken-nuxt
sudo cd /opt/seeken-nuxt && npm install && npm run build 
sudo systemctl restart nuxt-app.service
