const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authMiddleware");
const { getCarList, addCar } = require("../controllers/carController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getprofile", getProfile);
router.post("/updateprofile", authMiddleware, updateProfile);

//Car
router.get("/cardlist", getCarList);
router.post("/addcard", addCar);

module.exports = router;
