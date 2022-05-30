const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
    name:{
        type:String, 
    },
    email:{
        type:String,
    },
    modile:{
        type:String,
    },
    address:{
        type:String,
    },
    services:{
      type:[mongoose.Schema.Types.ObjectId],
      ref:'Service',
  },
},
{
    timestamps:true
}
);

module.exports =  mongoose.model("Enroll",EnrollmentSchema );