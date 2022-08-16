FROM node:10-stretch-slim

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm install

CMD ["npm", "run", "start"]
