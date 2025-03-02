const userModel = require("../models/usermodel");
const BlacklistToken = require("../models/blacklistToken");
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization?.split(" ")[1]);
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const isBlacklisted = await BlacklistToken.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Not authorized" });
  }
};
module.exports.authCaptain = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization?.split(" ")[1]);
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const isBlacklisted = await BlacklistToken.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id)
  req.captain = captain;
  return next();
  }
    catch (err) {
      res.status(401).json({ message: "Not authorized" });
    }
  }

