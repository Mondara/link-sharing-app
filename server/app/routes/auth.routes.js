const express = require("express");

const { verifySignUp } = require("../middlewares");
const { signUp, signIn } = require("../controllers");

const authRouter = express.Router();

authRouter.post("/signup", verifySignUp, signUp);
authRouter.post("/signin", signIn);

module.exports = authRouter;
