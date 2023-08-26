require("dotenv").config();

const db = require("../models");

const ProfileModel = db.ProfileModel;

const updateProfile = (req, res) => {
  const updateProfileRequest = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profileName: req.body.profileName,
    links: req.body.links,
  };

  ProfileModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    updateProfileRequest
  ).catch((err) => {
    res.status(500).send({ message: err.message });
  });

  res.status(200).send({ message: "User information updated!" });
};

const getProfile = (req, res) => {
  ProfileModel.findOne({ email: req.body.email })
    .then((profile) => {
      res.status(200).json({
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        profileImage: profile.profileImage,
        links: profile.links,
      });
      return;
    })
    .catch((err) => {
      res.status(404).send({ message: "User not found!" });
    });
};

module.exports = {
  updateProfile,
  getProfile,
};
