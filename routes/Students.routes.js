const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes for students
router.get('/', studentController.getAllStudents);       // GET all students
router.post('/', studentController.createStudent);       // POST a new student
router.get('/:id', studentController.getStudentById);    // GET student by ID
router.delete('/:id', studentController.deleteStudentById); // DELETE student by ID

module.exports = router;