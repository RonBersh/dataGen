# build stage
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-staging

# production stage
FROM nginx:alpine as production-stage
COPY ./configs/nginx/ /etc/nginx/
COPY --from=build-stage /app/dist /usr/share/nginx/html/influencers
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]