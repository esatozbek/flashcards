# build stage
FROM node:12-stretch AS build
USER node
WORKDIR /build
COPY --chown=node:node package.json yarn.lock ./
RUN yarn
COPY --chown=node:node . .
RUN yarn build

# runtime stage
FROM nginx:alpine
COPY --from=build /build/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/