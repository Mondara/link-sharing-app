const express = require("express");

const { verifyToken, upload, verifyImage } = require("../middlewares");
const {
  getProfile,
  updateProfile,
  uploadImageCloudinary,
} = require("../controllers");

const profileRouter = express.Router();

profileRouter.post(
  "/",
  verifyToken,
  upload,
  verifyImage,
  uploadImageCloudinary,
  updateProfile
);

profileRouter.get("/:user", getProfile);
profileRouter.get("/", verifyToken, getProfile);

module.exports = profileRouter;
