 
var express = require('express');

var app= express();
var bodyParser= require('body-parser');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/cats');


//var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

extended:true
}));

var cats=require('.routes/cat.js')(app);

var server = app.listen(3000, function(){

console.log('Server running at http://127.0.0.1:3000/');

});

