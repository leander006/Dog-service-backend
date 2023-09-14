const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
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
    discount:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
},
{
    timestamps:true
}
);

module.exports =  mongoose.model("Offer",OfferSchema);