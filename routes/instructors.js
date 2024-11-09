const express = require('express');
const router = express.Router();
const {
    getInstructors, 
    getInstructorsById,
    createInstructors,
    updateInstructors,
    deleteInstructors
} = require('../controllers/instructors.controller.js');

// Define the routes with the correct HTTP methods
router.get('/', getInstructors);
router.get('/:id', getInstructorsById);
router.post('/', createInstructors); // Use POST for creating
router.put('/:id', updateInstructors); // Use PUT for updating
router.delete('/:id', deleteInstructors); // Use DELETE for deleting

module.exports = router;
