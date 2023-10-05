const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const { connectDB } = require("./app/config");
const { authRouter, profileRouter } = require("./app/routes");
const { notFound, errorHandler } = require("./app/middlewares/errorHandlers");

connectDB();
const app = express();

const corsOptions = {
  origin: "https://link-app-u33e.onrender.com",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/auth", authRouter);
app.use("/profile", profileRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("Listening on Port: " + PORT);
});
