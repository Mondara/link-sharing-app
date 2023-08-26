const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;
db.UserModel = require("./user.models");
db.ProfileModel = require("./profile.models");

module.exports = db;
