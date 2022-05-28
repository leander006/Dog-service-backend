// const router = require("express").Router();
// const User = require("../models/User");


// const bcrypt = require('bcrypt');
// const {protect} = require('../middleware/authMiddileware')

// //update user
// router.put("/",protect,async(req,res)=>{
//     console.log(req.user.password);
//     console.log(req.user._id);
//             if(req.user.password)
//             {
//                 const salt = await bcrypt.genSalt(10);
//                 req.user.password = await bcrypt.hash(req.body.password,salt);
//             }
//             try {
//                 const updatedUser = await User.findByIdAndUpdate(req.user._id,{
//                     $set :req.body,
//                 },{new:true});
                
//                 return res.status(200).json("User updated successfully");
//             } catch (error) {
//                 return res.status(401).json( error);
//             }
// });

// //delete the user
// router.delete("/",protect,async(req,res)=>{
//         try {
//                 try {
//                     await Post.deleteMany({createdBy:req.user._id})
//                     await User.findByIdAndDelete(req.user._id);
//                     return res.status(200).json("User deleted successfully");
//                  } catch (error) {
//                      return res.status(500).json( error);
//                  }
//         } catch (error) {
//             return res.send(401).json("User not found");
//         }
// });

// //Get user

// router.get("/",protect,async(req,res)=>{
//     try {
//         const user = await User.findById(req.user._id);
//         const {password, ...others} = user._doc
//         return res.status(200).json(others);
//     } catch (error) {
//         return res.status(404).json(error);
//     }
// })



// module.exports = router;