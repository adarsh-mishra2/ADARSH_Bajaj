const express = require("express");
const studentController123 = require("../controllers/studentController");
const router = express.Router();

router.get("/", studentController123.getInfo);
router.post("/", studentController123.processInfo);

module.exports = router;
