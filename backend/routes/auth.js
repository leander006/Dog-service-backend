
const express = require('express');
const router = express.Router();

const {registration,login} = require("../controllers/authContoller")


router.post("/register",registration)
router.post("/login",login)

 
module.exports = router;