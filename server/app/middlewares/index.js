const verifySignUp = require("./verifySignUp");
const verifyToken = require("./verifyToken");
const verifyImage = require("./verifyImage");
const upload = require("./multerSetup.js");

module.exports = {
  verifyToken,
  verifySignUp,
  verifyImage,
  upload,
};
