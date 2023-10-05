const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models");

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(401);
    throw new Error("No token provided!");
  }

  try {
    const decoded = await jwt.verify(token, process.env.SECRET);

    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Unauthorized. Token Invalid");
  }
});

module.exports = verifyToken;
