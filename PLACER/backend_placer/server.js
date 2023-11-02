require('dotenv').config();  //When you call it will load the values from the .env file 
const http=require('http');
const app=require('./index')
const server=http.createServer(app);// function takes an argument, which should be a function that will be called for each HTTP request that the server receives
server.listen(process.env.PORT);
