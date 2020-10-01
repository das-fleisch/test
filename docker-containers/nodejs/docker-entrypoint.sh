#!/bin/sh

cd /var/www/front && npm run build;
cd /var/www/api && npm start;

