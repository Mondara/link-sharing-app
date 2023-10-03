const { signIn, signUp } = require("./auth.controllers");
const { updateProfile, getProfile } = require("./profile.controllers");
const uploadImageCloudinary = require("./uploadImage.controllers");

module.exports = {
  signIn,
  signUp,
  updateProfile,
  getProfile,
  uploadImageCloudinary,
};
