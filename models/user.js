var mongoose = require('mongoose');

// creating user schema
var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);