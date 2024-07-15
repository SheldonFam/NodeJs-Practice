const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getprofile", getProfile);
router.post("/updateprofile", updateProfile);

module.exports = router;
