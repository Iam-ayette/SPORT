//import mongoose
const mongoose=require("mongoose")
//create match schema
const matchSchema=mongoose.Schema({
    name:String,
    country:String,
    capacity:Number,
    
   
});
//affect model name to schema
const stadium=mongoose.model("Stadium",matchSchema)
//model match exportable
module.exports=stadium;
