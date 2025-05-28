#!/bin/bash
cd /opt/seeken-nuxt && \
sudo chown -R ssm-user:ssm-user . && \
npm install && \
npm run build > /opt/seeken-nuxt/deploy.log 2>&1
