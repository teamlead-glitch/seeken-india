#!/bin/bash

echo "Cleaning up previous deployment..."

rm -rf /opt/seeken-nuxt/*
chown -R ssm-user:ssm-user /opt/seeken-nuxt
