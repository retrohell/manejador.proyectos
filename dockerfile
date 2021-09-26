FROM node
MAINTAINER Alan Varela
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=3000
EXPOSE ${port}
CMD npm start