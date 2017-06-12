// Main server Page
const express = require ('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
var app = express ();
const router = require('./router');
const mongoose =require('mongoose');
const cors = require('cors');
 
app.use(cors());

 //DB setup
mongoose.connect('mongodb://bridgeadmin:FeKpCJtWIhb7lM2s@bvpp-shard-00-00-69bz6.mongodb.net:27017,bvpp-shard-00-01-69bz6.mongodb.net:27017,bvpp-shard-00-02-69bz6.mongodb.net:27017/bvpp?ssl=true&replicaSet=bvpp-shard-0&authSource=admin');

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type:'*/*' }));

router(app);
//Server Setup
var PORT = process.env.PORT || 2500;
const server = http.createServer(app);
server.listen(PORT);
console.log('server up on ' + PORT);