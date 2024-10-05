const express = require('express');
const router = express.Router();
const {getInstructors} = require ('../controllers/instructors.controller.js')

router.get('/', getInstructors);

module.exports = router;