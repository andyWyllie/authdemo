var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/auth_demo_app");

app.set('view engine', 'ejs');

// home route
app.get('/', function(req, res){
    res.render("home");
});

// secret route
app.get('/secret', function(req, res){
    res.render("secret");
});

// setting up the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started......')
})