const Product = require("../models/Product.model");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) return res.status(400).json({ message: "Product not found" });
  res.send(product);
};
