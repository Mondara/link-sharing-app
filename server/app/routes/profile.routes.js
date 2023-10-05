const express = require("express");

const { verifyToken, upload, verifyImage } = require("../middlewares");
const {
  getProfile,
  updatedUser,
  uploadImageCloudinary,
} = require("../controllers");

const profileRouter = express.Router();

profileRouter.put(
  "/",
  verifyToken,
  upload,
  verifyImage,
  uploadImageCloudinary,
  updatedUser
);

profileRouter.get("/:user", getProfile);
profileRouter.get("/", verifyToken, getProfile);

module.exports = profileRouter;
