const mongoose = require("mongoose");
const timestampPlugin = require("./plugins/timestamp");

const UserSchema = new mongoose.Schema({
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  createdAt: Date,
  updatedAt: Date,
});

UserSchema.plugin(timestampPlugin);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
