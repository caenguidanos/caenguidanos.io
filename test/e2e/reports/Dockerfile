FROM node:17
ARG REPORT
WORKDIR /usr/src/app
COPY $REPORT ./playwright-report
RUN npm init -y
RUN npm i -E @playwright/test@1.17.0-rc1
RUN npm set-script start "playwright show-report"
EXPOSE 9323
CMD [ "npm", "start" ]
