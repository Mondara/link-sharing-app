const db = require("../models");

const UserModel = db.UserModel;

const verifySignUp = (req, res, next) => {
  // Check Email already exists.
  UserModel.findOne({
    email: req.body.email,
  })
    .then((email) => {
      if (email) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    })
    .catch((err) => {
      res.status(500).send({ msg: err.message });
      return;
    });
};

module.exports = verifySignUp;
