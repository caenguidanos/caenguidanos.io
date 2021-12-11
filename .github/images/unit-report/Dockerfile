FROM node:16.13.0
WORKDIR /usr/local/app
COPY dist/jest/coverage ./dist
RUN npm init -y
RUN npm set-script start "serve dist"
RUN npm i -E -D serve
EXPOSE 3000
CMD ["npm", "start"]
