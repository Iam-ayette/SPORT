//import mongoose
const mongoose = require("mongoose")
//create match schema
const playerShema = mongoose.Schema({
    name: String,
    position: String,
    age: Number,
    number: Number,
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'

    }
});
//affect model name to schema
const player = mongoose.model("Player", playerShema)
//model match exportable
module.exports = player;
