require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");

const UserModel = db.UserModel;
const ProfileModel = db.ProfileModel;

const signUp = (req, res) => {
  new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .save()
    .then((user) => {
      new ProfileModel({
        email: user.email,
      }).save();
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });

  return res.status(200).send({ message: "User was registered successfully!" });
};

const signIn = (req, res) => {
  console.log(req.body);

  UserModel.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) return res.status(404).send({ message: "No User found!" });

    if (!bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).send({ message: "Invalid Password" });

    const token = jwt.sign({ id: user.email }, process.env.SECRET, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).send({ user: req.body.email, accessToken: token });
  });
};

module.exports = {
  signUp,
  signIn,
};
