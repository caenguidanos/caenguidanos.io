FROM node:17
WORKDIR /usr/src/app
COPY jest .
RUN npm init -y
RUN npm i serve
RUN npm set-script start "serve ."
EXPOSE 3000
CMD [ "npm", "start" ]
