const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth-controller");


// Register route
router.route("/register").post(AuthController.registerPost);


module.exports = router;