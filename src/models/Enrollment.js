const mongoose = require("mongoose");
// const Service = require("../models/Service")
const EnrollmentSchema = new mongoose.Schema({
    username:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User'
    },
    dogname:{
        type:String,
    },
    modile:{
        type:String,
    },
    allergy:{
        type:String,
    },
    service:{
        type:String,
    },
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    breed:{
        type:String
    },
    offers:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Offer',
      required:false
  },
 
},
{
    timestamps:true
}
);

module.exports =  mongoose.model("Enroll",EnrollmentSchema );