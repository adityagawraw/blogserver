const mongoose = require("mongoose");


 
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim:true
    },
    author:{
        type:String,
        required: true,
        trim:true
    },
    category:{
        type:String,
        required: true,
        trim:true
    },
    content:{
        type:String,
        required: true,
        trim:true
    },
    tags:{
        type:[String]
    }
}) 

module.exports = mongoose.model("blog", blogSchema);