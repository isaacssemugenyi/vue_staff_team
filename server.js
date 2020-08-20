const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

mongoose.connect(process.env.CONNECTIONSTRING, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    })
    .then(('open', ()=>{
        console.log('connected');
        app.listen(port, ()=> console.log(`Server started on port ${port}`))
    }))
    .catch('error',()=>{console.log(error);})


const staffRoute = require('./routes/staff');
app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));
//Still failing to display image
//Send json data through axios, jquery, XMLHttpRequest or Fetch
app.use(express.json());

app.use('/', staffRoute);

app.use('*', (req, res)=>{
    res.json('You have hit an unavalaible page')
});
