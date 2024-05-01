const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      req.user = null;
      return res.status(403).json("Token is not valid!");
    } else {
      req.user = user;
      next(); // Call next middleware or route handler
    }
  });
};

module.exports = { isAuth };
