const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const authRoutes = require("./routes/auth.routes");

dotenv.config(); // Load environment variables

const app = express();
const PORT = 5000;

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json()); // Parse JSON request body

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});

// API routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
