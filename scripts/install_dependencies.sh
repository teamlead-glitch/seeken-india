#!/bin/bash

cd /opt/seeken-nuxt || exit 1

echo "Installing npm dependencies..."
npm install

echo "Building Nuxt SSR app..."
npm run build
