const express = require('express'); //server
const body = require('body-parser');  //json parsing
const mongoose = require('mongoose'); //db schema parsing
const item = require('./routes/item'); 
require('dotenv/config') //.env (environment files)
const app = express();

app.use(body.json());


app.use('/items',item);


app.get('/',(req,res)=>{
    res.send("Welcome world");
});

mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true,useUnifiedTopology: true },console.log('Connected to DB'));


app.listen(3000,()=>{
    console.log("listening at port 3000");
});