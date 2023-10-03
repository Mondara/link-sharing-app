const express = require("express");
const cors = require("cors");

const db = require("./app/models");
const { authRouter, profileRouter } = require("./app/routes");

const app = express();

const corsOptions = {
  origin: "https://link-app-mt.netlify.app",
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

db.mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.use("/auth", authRouter);
app.use("/profile", profileRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});
