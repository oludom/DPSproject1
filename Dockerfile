FROM node:7
ADD . /server
WORKDIR /server
ENTRYPOINT ["node", "server.js"]