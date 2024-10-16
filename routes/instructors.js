const express = require('express');
const router = express.Router();
const { getInstructor, createInstructor, updateInstructor, deleteInstructor } = require("../controllers/instructors.controller.js")

router.get('/', getInstructor);
router.post('/', createInstructor);
router.put('/:id', updateInstructor);
router.delete('/:id', deleteInstructor);

module.exports = router;