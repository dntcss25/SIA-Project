// users.js
const express = require('express');
const router = express.Router();

// Import controllers
const studentController = require('../controllers/studentController');
const studentInfoController = require('../controllers/studentInfoController');
const instructorController = require('../controllers/instructorController');

// Routes for Students
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

// Routes for StudentInfo
router.post('/student-info', studentInfoController.createStudentInfo);
router.get('/student-info', studentInfoController.getAllStudentInfo);
router.get('/student-info/:id', studentInfoController.getStudentInfoById);
router.put('/student-info/:id', studentInfoController.updateStudentInfo);
router.delete('/student-info/:id', studentInfoController.deleteStudentInfo);

// Routes for Instructors
router.post('/instructors', instructorController.createInstructor);
router.get('/instructors', instructorController.getAllInstructors);
router.get('/instructors/:id', instructorController.getInstructorById);
router.put('/instructors/:id', instructorController.updateInstructor);
router.delete('/instructors/:id', instructorController.deleteInstructor);

module.exports = router;
