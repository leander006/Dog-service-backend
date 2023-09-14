
const asyncHandler = require('express-async-handler');
const Enroll = require('../models/Enrollment');
const Offer =require('../models/Offer')
// to Enroll for service //
const enroll = asyncHandler(async(req,res) =>{
      const {offer} = req.query    
      try {
            if(offer !== "null"){
                  const enroll = {username:req.user._id,...req.body,offers:offer};
                  // console.log("enroll with offers", enroll);
                  const register = new Enroll(enroll)
            await register.save();
            return res.status(200).json(register)
            }
            else{
                  const enroll = {username:req.user._id,...req.body};
                  // console.log("enroll without offers", enroll);
                  const register = new Enroll(enroll)
                  await register.save();
                  return res.status(200).json(register)
            }
      } catch (error) {
            return res.status(404).json(error.message)
      }
})
// to get enrollments by id //
const enrollmentById= asyncHandler(async(req,res) =>{
      try {
            const enrollById = await Enroll.findById(req.params.id).populate("offers").populate("username","-password");
            return res.status(200).json(enrollById )
      } catch (error) {
            return res.status(404).json(error)
      }
})
// to get all Enrollments//
const allEnrollments = asyncHandler(async(req,res) =>{
      try {
            const enrolls = await Enroll.find({}).populate("offers").populate("username","-password");
            console.log();
            if(!enrolls){
                  return res.status(404).json("Cannot find any services")
            }
            return res.status(200).json(enrolls)
      } catch (error) {
            return res.status(500).json(error.message)
      }
})



module.exports = {
      enroll,
      enrollmentById,
      allEnrollments,
};