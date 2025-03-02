const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/authmiddleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 Characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 Characters"),
    body("vechicle.color").notEmpty().withMessage("Vehicle color is required"),
    body("vechicle.plateNumber")
      .notEmpty()
      .withMessage("Plate number is required"),
    body("vechicle.capacity")
      .isNumeric()
      .withMessage("Capacity must be a number"),
    body("vechicle.vechicleType")
      .notEmpty()
      .withMessage("Vehicle type is required"),
  ],
  captainController.registerCaptain
);

module.exports = router;
