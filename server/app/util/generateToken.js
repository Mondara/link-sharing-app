const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET, {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: 86400, // 24 hours
  });

  return token;
};

module.exports = generateToken;
