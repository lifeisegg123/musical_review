FROM node:alpine
WORKDIR /client
COPY package*.json ./
RUN npm install -q
COPY . .
EXPOSE 3000
CMD ["npm","start"]