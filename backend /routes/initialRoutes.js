const express = require("express");
const router = express.Router();
const connection = require("../db/conf");

const {  sendUserInfo } = require("../controller/userController");

router.post("/signin", sendUserInfo);
// router.get("/login", userPassword);

module.exports = router;
