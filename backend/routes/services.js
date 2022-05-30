
const express = require('express');
const router = express.Router();

const {serviceCreate,serviceRetrieve,serviceById,allService,limiService } = require('../controllers/servicesControllers')
const {protect} = require("../middleware/authMiddileware")


router.post("/",protect,serviceCreate)

router.get("/",protect,allService)
router.get("/limited",protect,limiService )

router.get("/:id",protect,serviceById)

router.delete("/delete/:id",protect,serviceRetrieve)

 
module.exports = router;