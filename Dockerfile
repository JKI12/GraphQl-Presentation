FROM node:8.7

RUN npm install -g pm2

WORKDIR opt/app/graph

COPY node_modules node_modules

COPY dist ./dist

COPY package.json .

EXPOSE 3000

WORKDIR /opt/app/graph/dist/server

CMD ["pm2-docker", "main.js"]