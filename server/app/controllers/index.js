const { signIn, signUp } = require("./auth.controllers");
const { updatedUser, getProfile } = require("./profile.controllers");
const uploadImageCloudinary = require("./uploadImage.controllers");

module.exports = {
  signIn,
  signUp,
  updatedUser,
  getProfile,
  uploadImageCloudinary,
};
