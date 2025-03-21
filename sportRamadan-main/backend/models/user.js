//import mongoose
const mongoose = require("mongoose")
//create match schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    phone: Number,
    role: String,
    photo: String,

});
//affect model name to schema
const user = mongoose.model("User", userSchema)
//model match exportable
module.exports = user;
