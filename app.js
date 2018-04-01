var express               = require('express'),
    app                   = express(),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user')


mongoose.connect("mongodb://localhost/auth_demo_app");

app.use(require("express-session")({
    secret: "Nickelodeon was better that CN",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =============
// ROUTES
// =============
// home route
app.get('/', function(req, res){
    res.render("home");
});

// secret route
app.get('/secret', function(req, res){
    res.render("secret");
});

// AUTH ROUTES
// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
// handling user sign up
app.post("/register", function(req, res){
    res.send("REGISTER");
});

// setting up the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started......')
})