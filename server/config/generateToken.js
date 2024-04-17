const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "rinorVerification", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;