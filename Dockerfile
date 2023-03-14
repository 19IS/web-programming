FROM node:18.14.0

WORKDIR /web_app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "nodemon", "backend/index.js" ]
