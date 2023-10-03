const db = require("../models");

const UserModel = db.UserModel;

const verifySignUp = (req, res, next) => {
  // Check Email already exists.
  UserModel.findOne({
    email: req.body.email,
  })
    .then((email) => {
      if (email) {
        return res
          .status(400)
          .send({ message: "Failed! Email is already in use!" });
      }

      return next();
    })
    .catch((err) => {
      return res.status(500).send({ msg: err.message });
    });
};

module.exports = verifySignUp;
