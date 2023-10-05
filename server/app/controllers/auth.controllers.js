const asyncHandler = require("express-async-handler");

const User = require("../models");
const generateToken = require("../util/generateToken");

// @desc Login
// Route Post /auth/signin
// @access Public
const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(res, user._id);

    return res.status(200).send({ user: user._id, accessToken: token });
  } else {
    res.status(404);
    throw new Error("No User found");
  }
});

// @desc SignUp
// Route Post /auth/signup
// @access Public
const signUp = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ email, password });

  if (user) {
    res.status(201).send({ message: "User created successfully" });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

module.exports = {
  signUp,
  signIn,
};
