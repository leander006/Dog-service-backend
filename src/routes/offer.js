const express = require("express");
const router = express.Router();

const {
  OfferCreate,
  OfferRetrieve,
  OfferById,
  allOffer,
} = require("../controllers/offersControllers");
const { protect } = require("../middleware/authMiddileware");

router.post("/", protect, OfferCreate);

router.get("/", protect, allOffer);

router.get("/:id", protect, OfferById);

router.delete("/delete/:id", protect, OfferRetrieve);

module.exports = router;
