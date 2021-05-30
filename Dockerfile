FROM node:12

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start"]