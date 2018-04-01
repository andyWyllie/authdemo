var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');


// creating user schema
var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// use PLM package
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);