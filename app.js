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
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
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
app.get('/secret', isLoggedIn,function(req, res){
    res.render("secret");
});

// AUTH ROUTES
// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
// handling user sign up
app.post("/register", function(req, res){
    // pw is a 2nd argument so its not in a database with username
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        // choosing strategy for passport
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});
// login form
app.get('/login', function(req, res) {
   res.render("login"); 
});
// handling login post route
app.post("/login", passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
    }), function(req, res){
    
});

// logout route
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

// loggedIn middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


// setting up the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started......')
})