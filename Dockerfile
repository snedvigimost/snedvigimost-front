### STAGE 1: Build ###
FROM node:12-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app
RUN npm run build --output-path=dist

### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#WORKDIR /app
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build app/dist/real-estate /usr/share/nginx/html

FROM caddy
WORKDIR /app
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build app/dist/real-estate dist/real-estate
