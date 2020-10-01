FROM node:12

RUN mkdir -p /var/www
WORKDIR /var/www/api
COPY ./api/package*.json /var/www/api/
COPY ./front/package*.json /var/www/front/
COPY ./docker-containers/nodejs/docker-entrypoint.sh /
RUN npm install -g typescript
RUN cd /var/www/api && npm install
RUN cd /var/www/front && npm install
EXPOSE 3000