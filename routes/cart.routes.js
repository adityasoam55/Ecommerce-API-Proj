const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

const {
  addToCart,
  updateCartItem,
  removeCartItem,
} = require("../controllers/cart.controller");

// Cart routes (all protected)
router.post("/", auth, addToCart); // Add item to cart
router.put("/:id", auth, updateCartItem); // Update cart item quantity
router.delete("/:id", auth, removeCartItem); // Remove item from cart

module.exports = router;
