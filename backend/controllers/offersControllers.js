const Offer = require('../models/Offer')

const asyncHandler = require('express-async-handler')

// to create Offer //
const OfferCreate = asyncHandler(async(req,res) =>{
      const Offers= {...req.body}
      // console.log("inside offer" , Offer );
      try {
            const Offerses = new Offer(Offers)
            console.log("inside offer" , Offerses );
            await Offerses.save();
            return res.status(200).json(Offers)
      } catch (error) {
            return res.status(404).json(error.message)
      }
})
// to get Offer by id //
const OfferById = asyncHandler(async(req,res) =>{
      try {
            const Offer = await Offer.findById(req.params.id)
            return res.status(200).json(Offer)
      } catch (error) {
            return res.status(404).json(error)
      }
})
// to get all Offer //
const allOffer = asyncHandler(async(req,res) =>{
      try {
            const Offers = await Offer.find({}).sort({createdAt:-1})
            if(!Offers){
                  return res.status(200).json("Cannot found any Offers")
            }
            return res.status(200).json(Offers)
      } catch (error) {
            return res.status(404).json(error)
      }
})


//  to delete Offer //
const OfferRetrieve = asyncHandler(async(req,res) =>{
     
      
      try {
          await Offer.findByIdAndDelete(req.params.id); 
          return res.status(200).json("Deleted successfully");
      } catch (error) {
          return res.status(404).json(error.message);
      }
})

module.exports = {
      OfferCreate,
      OfferRetrieve,
      OfferById,
      allOffer
};