#!/bin/bash
sudo rm -rf /opt/seeken-nuxt
sudo mkdir /opt/seeken-nuxt
sudo unzip /opt/seeken-nuxt-tmp/build_output.zip -d /opt/seeken-nuxt
cd /opt/seeken-nuxt && sudo npm install && sudo npm run build 
sudo systemctl restart nuxt-app.service

