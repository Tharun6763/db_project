const express=require('express');
var cors=require('cors');
const connected=require('./connection');
//user
const userRoute=require('./routes/user');
//department
const departmentRoute=require('./routes/department');
//companies
const companiesRoute=require('./routes/companies');
// const helloRoute=require('./routes/hello');
const app=express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/department',departmentRoute);
app.use('/companies',companiesRoute);
// app.use('/hello',helloRoute);

module.exports=app;