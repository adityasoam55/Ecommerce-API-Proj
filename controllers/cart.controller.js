const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");

// Add a product to user's cart
exports.addToCart = async (req, res) => {
  const userId = req.user;
  const { productId, quantity } = req.body;

  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  // Fetch or create cart for user
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [{ productId, quantity }] });
  } else {
    // Check if product already exists in cart
    const existingItem = cart.items.find((item) =>
      item.productId.equals(productId)
    );

    existingItem
      ? (existingItem.quantity += quantity)
      : cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.json({ message: "Added to cart", cart });
};

// Update quantity of a specific cart item
exports.updateCartItem = async (req, res) => {
  const userId = req.user;
  const itemId = req.params.id;
  const { quantity } = req.body;

  const cart = await Cart.findOne({ userId });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  const item = cart.items.id(itemId);
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.quantity = quantity;
  await cart.save();

  res.json({ message: "Item updated", cart });
};

// Remove item from cart
exports.removeCartItem = async (req, res) => {
  const userId = req.user;
  const itemId = req.params.id;

  const cart = await Cart.findOne({ userId });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.items = cart.items.filter((item) => item.id !== itemId);
  await cart.save();

  res.json({ message: "Item removed", cart });
};
