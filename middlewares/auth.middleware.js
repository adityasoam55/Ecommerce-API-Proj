const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // Token required for protected routes
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    // Decode and verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // Attach user ID to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
