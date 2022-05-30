const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    OfferImage:{
        type:String, 
    },
    offername:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    offer:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    categories:{
        type:String,
    },
},
{
    timestamps:true
}
);

module.exports =  mongoose.model("Service",ServiceSchema);