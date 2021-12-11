FROM node:16.13.0
WORKDIR /usr/local/app
COPY dist/e2e/html ./playwright-report
RUN npm init -y
RUN npm set-script start "playwright show-report"
RUN npm i -E -D @playwright/test
EXPOSE 9323
CMD ["npm", "start"]
