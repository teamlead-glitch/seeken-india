#!/bin/bash

# Reload systemd to recognize updated service
sudo systemctl daemon-reload

# Restart Nuxt app
sudo systemctl stop nuxt-app.service

sudo systemctl start nuxt-app.service