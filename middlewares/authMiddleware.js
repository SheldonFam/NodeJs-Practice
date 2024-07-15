const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwtConfig");

const authMiddleware = (req, res, next) => {
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];

  //   if (!token) {
  //     return res.sendStatus(401); // Unauthorized
  //   }

  //   jwt.verify(token, secret, (err, user) => {
  //     if (err) {
  //       return res.sendStatus(403); // Forbidden
  //     }

  //     req.user = user;
  //     next();
  //   });

  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded.user;
    req.user = { id: decoded.uid }; // Extract uid and set it as id

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;
