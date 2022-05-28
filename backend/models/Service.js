const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    OfferImage:{
        type:String, 
        unique:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
    },
    categories:{
        type:String,
        unique:false
    },
},
{
    timestamps:true
}
);

module.exports =  mongoose.model("Service",ServiceSchema);