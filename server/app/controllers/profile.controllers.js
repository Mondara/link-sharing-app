const asyncHandler = require("express-async-handler");

const User = require("../models");

// @desc Update User Details
// Route Post /profile
// @access Protected
const updatedUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("No user found");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.firstName = req.body.firstName || user.firstName;
  user.lastName = req.body.lastName || user.lastName;
  user.avatar = req.body.avatar || user.avatar;
  user.links = req.body.links || user.links;

  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser._id,
    email: updatedUser.email,
    firstName: updatedUser.firstName,
    lastName: updatedUser.lastName,
    avatar: updatedUser.avatar,
    links: updatedUser.links,
  });
});

// @desc Get User Details
// Route Get /profile
// @access Public/Protected
const getProfile = asyncHandler(async (req, res) => {
  let user;

  if (req.params?.user) {
    const [firstName, lastName] = req.params.user.split("-");

    user = await User.findOne({ firstName: firstName, lastName: lastName });
  } else {
    user = await User.findById(req.user._id);
  }

  if (!user) {
    res.status(400);
    throw new Error("No user found");
  }

  return res.status(200).json({
    email: user.email,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    avatar: user.avatar || "",
    links: user.links || [],
  });
});

module.exports = {
  updatedUser,
  getProfile,
};
