
const express = require('express');
const router = express.Router();

const {enroll,enrollmentById,allEnrollments,} = require('../controllers/enrollmentController')
const {protect} = require("../middleware/authMiddileware")


router.post("/",protect,enroll)

router.get("/",protect,allEnrollments)

router.get("/:id",protect,enrollmentById)

 
module.exports = router;