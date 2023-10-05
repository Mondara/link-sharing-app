const express = require("express");
const { signIn, signUp } = require("../controllers");

const authRouter = express.Router();

authRouter.post("/signin", signIn);
authRouter.post("/signup", signUp);

module.exports = authRouter;
