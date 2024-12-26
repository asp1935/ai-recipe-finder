FROM node:22.12-alpine

#set working dir
WORKDIR /src

#copy package.json and package-lock.json
COPY package.json package-lock.json ./

#install dependancies
RUN npm install

#copu rest code
COPY . .

#build the app
RUN npm run build

EXPOSE 3000

#start server
CMD [ "node","-r","dotenv/config","dist/bundle.js" ]
