# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY ./docker-start.sh .
COPY ./env2js.sh .

# Add bash
RUN apk add --no-cache bash

RUN chmod +x docker-start.sh
RUN chmod +x env2js.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/docker-start.sh && nginx -g \"daemon off;\""]