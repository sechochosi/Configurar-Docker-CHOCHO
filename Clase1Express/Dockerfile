FROM node:22-bullseye

WORKDIR /clase1express/app

COPY package*.json ./


RUN npm install


COPY . .

EXPOSE 3000

CMD [ "npm","start" ]