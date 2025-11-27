const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controllers/product.controller");

// Product routes
router.get("/", getAllProducts); // Get all products
router.get("/:id", getProductById); // Get product details by ID

module.exports = router;
