const express = require('express'); //server
const body = require('body-parser');  //json parsing
const mongoose = require('mongoose'); //db schema parsing
const path = require('path');
const item = require('./routes/item'); 
require('dotenv/config') //.env (environment files)
const app = express();
                
app.use(body.json());
app.use(express.static('public'));

app.use('/api/items',item);//for items route

app.get('/api',(req,res)=>{
    res.json({
        message: 'Welcome to the api'
    });
}); //root

mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true,useUnifiedTopology: true },console.log('Connected to DB'));

app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname+'/404.html'));
  });// 404 page


app.listen(8080,()=>{
    console.log("listening at port 3000");
});