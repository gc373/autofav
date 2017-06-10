FROM node:8-slim

COPY nodefiles /autofav
WORKDIR /autofav
RUN npm install

CMD ["node" , "autofav.js"]