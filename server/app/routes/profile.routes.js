const express = require("express");

const { verifyToken } = require("../middlewares");
const { getProfile, updateProfile } = require("../controllers");

const profileRouter = express.Router();

profileRouter.post("/", verifyToken, updateProfile);
profileRouter.get("/", verifyToken, getProfile);

module.exports = profileRouter;
