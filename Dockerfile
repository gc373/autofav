FROM node:latest

COPY nodefiles /autofav
WORKDIR /autofav
RUN npm install

CMD ["node" , "autofav.js"]