FROM node:15-alpine3.10

WORKDIR /app

COPY . /app
RUN yarn install

USER node
CMD ["npm", "run", "start"]
