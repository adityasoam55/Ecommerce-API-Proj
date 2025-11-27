const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/auth.controller");

// Auth routes
router.post("/register", registerUser); // Register new user
router.post("/login", loginUser);       // Login user & return token

module.exports = router;
