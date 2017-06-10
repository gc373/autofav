FROM node:latest

COPY nodefiles /autofav
WORKDIR /autofav

CMD ["node" , "autofav.js"]