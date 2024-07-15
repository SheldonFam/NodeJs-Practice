const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwtConfig");

const generateToken = (user) => {
  return jwt.sign(
    { uid: user._id, displayusername: user.displayusername },
    secret,
    { expiresIn }
  );
};

module.exports = generateToken;
