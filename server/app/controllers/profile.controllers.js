require("dotenv").config();

const db = require("../models");

const ProfileModel = db.ProfileModel;

const updateProfile = async (req, res) => {
  console.log("Updating Profile Information.");
  try {
    const updateProfileRequest = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      avatar: req.body.avatar,
      links: req.body.links,
    };

    const updatedProfile = await ProfileModel.findOneAndUpdate(
      { email: req.body.email },
      updateProfileRequest,
      { new: true } // Return the updated document
    );

    if (!updatedProfile) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({
      email: updatedProfile.email,
      firstName: updatedProfile.firstName,
      lastName: updatedProfile.lastName,
      avatar: updatedProfile.avatar,
      links: updatedProfile.links,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "An error occurred" });
  }
};

const getProfile = (req, res) => {
  console.log("Getting Profile Information.");
  let searchParams = {};

  if (req.params?.user) {
    const [firstName, lastName] = req.params.user.split("-");

    searchParams = {
      firstName: firstName,
      lastName: lastName,
    };
  } else {
    searchParams = {
      email: req.body.email,
    };
  }

  ProfileModel.findOne(searchParams)
    .then((profile) => {
      if (!profile) return new Error("Authentication Error");

      try {
        profile.links = profile.links ? JSON.parse(profile.links) : [];
      } catch (e) {
        console.log("Error parsing profile.links: " + e);
        profile.links = [];
      }

      return res.status(200).json({
        email: profile.email,
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        avatar: profile.avatar || "",
        links: profile.links,
      });
    })
    .catch((err) => {
      return res.status(404).send({ message: "User not found!" });
    });
};

module.exports = {
  updateProfile,
  getProfile,
};
