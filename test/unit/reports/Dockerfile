FROM node:17
WORKDIR /usr/src/app
COPY jest .
RUN npm init -y
RUN npm i serve
RUN npm set-script start "serve . --port 3000"
EXPOSE 3000
CMD [ "npm", "start" ]
