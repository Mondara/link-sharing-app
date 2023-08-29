const express = require("express");
const cors = require("cors");

const db = require("./app/models");
const { authRouter, profileRouter } = require("./app/routes");

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

const DATABASe_URL =
  "mongodb+srv://Mondara:Thotage123@userdatabase.jbhktrt.mongodb.net/?retryWrites=true&w=majority";

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
  .connect(DATABASe_URL, {
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
  console.log("listening on port" + PORT);
});
