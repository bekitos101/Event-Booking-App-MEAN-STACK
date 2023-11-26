const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const multer = require('multer');
const cors=require('cors');
const upload = multer({ dest: 'uploads/' });
require('./config/connect');
const EventRoute=require('./routes/Event');
const UserRoute=require('./routes/User');

//set up 
const app = express();
app.use(express.json()); 
//routes set up 
app.use('/TPL/Events',EventRoute); 
app.use('/TPL/Users',UserRoute);

//port set up 

const server=app.listen(3000,()=>{


    console.log('server is working');

} );

module.exports = server;