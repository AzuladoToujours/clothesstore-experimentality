FROM node:12.22.0-alpine3.11

WORKDIR /clothesstore

ADD package.json package-lock.json /clothesstore/
RUN npm install

EXPOSE 8080

ADD . /clothesstore

CMD ["node", "src/server.js"]