var express = require('express');
var bodyPaser = require('body-parser');
var mongoose = require('mongoose');


//set up express
var app = express();
//
mongoose.connect("mongodb://localhost/ninjadb", { useNewUrlParser: true });


app.use(bodyPaser.json());

app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
    //console.log(err);

});

app.listen(3000, function(){
    console.log('App listening');

});