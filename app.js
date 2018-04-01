var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// home route
app.get('/', function(req, res){
    res.render("home");
});

// setting up the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started......')
})