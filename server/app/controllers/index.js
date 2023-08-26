const { signIn, signUp } = require("./auth.controllers");
const { updateProfile, getProfile } = require("./profile.controllers");

module.exports = {
  signIn,
  signUp,
  updateProfile,
  getProfile,
};
