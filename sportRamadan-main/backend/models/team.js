//import mongoose
const mongoose = require("mongoose")
//create match schema
const teamSchema = mongoose.Schema({
    name: String,
    owner: String,
    foundation: Number,
    playersId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }]



});
//affect model name to schema
const team = mongoose.model("Team", teamSchema)
//model match exportable
module.exports = team;
