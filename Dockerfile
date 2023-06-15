FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build

FROM nginx:1.21-alpine

COPY --from=builder /app/build /usr/share/nginx/html/task-manager


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
