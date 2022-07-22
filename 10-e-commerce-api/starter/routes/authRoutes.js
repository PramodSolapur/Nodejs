const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// above three routes rae same as below ones

// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/logout").get(logout);

module.exports = router;
