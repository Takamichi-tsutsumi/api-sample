FROM node:9.2.0-alpine

WORKDIR /home/api
COPY package.json .

RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install -g yarn && \
    yarn

COPY . .
