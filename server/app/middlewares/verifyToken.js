const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err || decoded.id == req.email) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    console.log(req.body);
    req.body.email = decoded.id;
  });

  return next();
};

module.exports = verifyToken;
