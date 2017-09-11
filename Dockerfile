FROM node:latest

ENV SLACK_HOOK_URL "https://hooks.slack.com/services/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"

WORKDIR /usr/src/app
COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]
