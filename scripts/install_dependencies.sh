#!/bin/bash
cd /opt/seeken-nuxt

# Ensure correct permissions
sudo chown -R ssm-user:ssm-user .

# Install dependencies
npm install
npm run build