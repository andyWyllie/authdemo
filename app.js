var express               = require('express'),
    app                   = express(),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user')


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