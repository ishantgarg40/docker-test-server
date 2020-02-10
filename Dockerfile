FROM node

WORKDIR /src/app

COPY . .

CMD ["npm", "install"]

EXPOSE 3000

RUN ["node", "server"]

