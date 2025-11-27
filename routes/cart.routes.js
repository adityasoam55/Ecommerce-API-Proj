const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

const {
  addToCart,
  updateCartItem,
  removeCartItem,
} = require("../controllers/cart.controller");

router.post("/", auth, addToCart);
router.put("/:id", auth, updateCartItem);
router.delete("/:id", auth, removeCartItem);

module.exports = router;
