FROM node:17
WORKDIR /usr/src/app
COPY . .
RUN npm i -g serve
RUN npm set-script start "serve"
EXPOSE 3000
CMD [ "npm", "start" ]
