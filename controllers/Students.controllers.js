const Student = require('../models/Student');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.createStudent(req.body);
    res.status(201).json({ message: 'Student created', studentId: newStudent.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Could not create student' });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete student by ID
exports.deleteStudentById = async (req, res) => {
  try {
    const result = await Student.deleteStudentById(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};