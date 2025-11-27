// Import User model for database operations
const User = require("../models/User.model");

// Import JWT for creating access tokens
const jwt = require("jsonwebtoken");

/**
 Register a new user,  POST /auth/register
 */
exports.registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  // Check if a user already exists with this email
  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // Create a new user (Note: password is stored as plain text — hashing recommended)
  const user = await User.create({ fullName, email, password });

  res.json({ message: "User registered", user });
};

/**
 Login user & return JWT token
 POST /auth/login

 */
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  // Validate user & password
  // (Comparison is plain text; should add bcrypt hashing later)
  if (!user || user.password !== password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate JWT token valid for 5 minutes
  // Token payload contains user ID
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });

  res.json({ message: "Login successful", token });
};
