const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/scatch");


const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
})


module.exports = mongoose.model("user", userSchema);