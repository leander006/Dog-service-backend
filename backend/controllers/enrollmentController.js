
const asyncHandler = require('express-async-handler');
const Enroll = require('../models/Enrollment');

// to register //
const enroll = asyncHandler(async(req,res) =>{
      const enroll = {...req.body,services:req.params.id}

      console.log(enroll);
      try {
            const register = new Enroll(enroll)
            await register.save();
            return res.status(200).json(register)
      } catch (error) {
            return res.status(404).json(error.message)
      }
})
// to get enrollments by id //
const enrollmentById= asyncHandler(async(req,res) =>{
      try {
            const enrollById = await Enroll.findById(req.params.id)
            return res.status(200).json(enrollById )
      } catch (error) {
            return res.status(404).json(error)
      }
})
// to get all Enrollments//
const allEnrollments = asyncHandler(async(req,res) =>{
      try {
            const enrolls = await Enroll.find({})
            if(!enrolls){
                  return res.status(200).json("Cannot found any services")
            }
            return res.status(200).json(enrolls)
      } catch (error) {
            return res.status(404).json(error)
      }
})



module.exports = {
      enroll,
      enrollmentById,
      allEnrollments,
};