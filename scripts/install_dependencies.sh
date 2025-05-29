#!/bin/bash
rm -rf /opt/seeken-nuxt
mkdir /opt/seeken-nuxt
unzip /opt/seeken-nuxt-tmp/build_output.zip -d /opt/seeken-nuxt
cd /opt/seeken-nuxt && npm install && npm run build 
sudo systemctl restart nuxt-app.service
