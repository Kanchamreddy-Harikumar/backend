const express = require("express");
const router = express.Router();
const { users } = require("../controllers/user");

router.get("/user", users);

module.exports = router;