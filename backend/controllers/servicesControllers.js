const Service = require('../models/Service')

const asyncHandler = require('express-async-handler')

// to create service //
const serviceCreate = asyncHandler(async(req,res) =>{
      const service = {...req.body}
      try {
            const services = new Service(service)
            await services.save();
            return res.status(200).json(services)
      } catch (error) {
            return res.status(404).json(error.message)
      }
})
// to get service by id //
const serviceById = asyncHandler(async(req,res) =>{
      try {
            const service = await Service.findById(req.params.id)
            return res.status(200).json(service)
      } catch (error) {
            return res.status(404).json(error)
      }
})
// to get all service //
const allService = asyncHandler(async(req,res) =>{
      try {
            const services = await Service.find({}).sort({createdAt:-1})
            if(!services){
                  return res.status(200).json("Cannot found any services")
            }
            return res.status(200).json(services)
      } catch (error) {
            return res.status(404).json(error)
      }
})
// to get only 3 service

const limiService = asyncHandler(async(req,res) =>{
      try {
            const services = await Service.find({}).sort({createdAt:-1}).limit(3)
            if(!services){
                  return res.status(200).json("Cannot found any services")
            }
            return res.status(200).json(services)
      } catch (error) {
            return res.status(404).json(error)
      }
})

//  to delete service //
const serviceRetrieve = asyncHandler(async(req,res) =>{
      try {
          const service= await Service.findByIdAndDelete(req.params.id); 
          return res.status(200).json("Deleted successfully");
      } catch (error) {
          return res.status(404).json(error.message);
      }
})

module.exports = {
      serviceCreate,
      serviceRetrieve,
      serviceById,
      allService,
      limiService 
};