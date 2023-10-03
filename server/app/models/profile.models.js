const mongoose = require("mongoose");
const timestampPlugin = require("./plugins/timestamp");

const ProfileSchema = new mongoose.Schema({
  email: { type: "string", required: true, unique: true },
  firstName: { type: "string" },
  lastName: { type: "string" },
  avatar: { type: "string" },
  links: { type: "string" },
  createdAt: Date,
  updatedAt: Date,
});

ProfileSchema.plugin(timestampPlugin);

const ProfileModel = mongoose.model("Profile", ProfileSchema);

module.exports = ProfileModel;
