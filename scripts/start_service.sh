#!/bin/bash

# Reload systemd to recognize updated service
sudo systemctl daemon-reload

# Restart Nuxt app
sudo systemctl restart nuxt-app.service