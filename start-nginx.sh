#!/bin/sh

# Replace the placeholder with the actual port environment variable
envsubst '${PORT}' < /etc/nginx/nginx.conf > /etc/nginx/nginx.tmp

# Start Nginx with the substituted configuration
nginx -g "daemon off;" -c /etc/nginx/nginx.tmp