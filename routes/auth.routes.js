const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/auth.controller");
const User = require("../models/User.model"); // ✅ ADD THIS

router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;
