const express = require('express');
const router = express.Router();
const { getInstructor } = require("../controllers/instructors.controller.js")

router.get('/', getInstructor);

module.exports = router;