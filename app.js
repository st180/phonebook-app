//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port number
const port = 3000;

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongodb @ 27017");
});

//on error
mongoose.connection.on("error",(err)=>{
    if (err) {
        console.log("error in db connection: " + err);
    }
});

//adding middleware cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//routes
app.use('/api', route);

//testing server
app.get('/', (req, res)=>{
    res.send("foobar");
});

app.listen(port,()=>{
    console.log("Server started at port" + port);
});