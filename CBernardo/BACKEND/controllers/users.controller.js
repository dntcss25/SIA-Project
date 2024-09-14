// Students 
const Student = require('../models/student');

// Create a new student
exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  try {
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a student
exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// StudentInfo 
const StudentInfo = require('../models/studentInfo');

// Create a new studentInfo entry
exports.createStudentInfo = async (req, res) => {
  const studentInfo = new StudentInfo(req.body);
  try {
    const savedStudentInfo = await studentInfo.save();
    res.status(201).json(savedStudentInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all studentInfo
exports.getAllStudentInfo = async (req, res) => {
  try {
    const studentInfo = await StudentInfo.find();
    res.status(200).json(studentInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get studentInfo by ID
exports.getStudentInfoById = async (req, res) => {
  try {
    const studentInfo = await StudentInfo.findById(req.params.id);
    if (!studentInfo) return res.status(404).json({ message: 'StudentInfo not found' });
    res.status(200).json(studentInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update studentInfo by ID
exports.updateStudentInfo = async (req, res) => {
  try {
    const updatedStudentInfo = await StudentInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudentInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete studentInfo by ID
exports.deleteStudentInfo = async (req, res) => {
  try {
    await StudentInfo.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'StudentInfo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Instructors 
const Instructor = require('../models/instructor');

// Create a new instructor
exports.createInstructor = async (req, res) => {
  const instructor = new Instructor(req.body);
  try {
    const savedInstructor = await instructor.save();
    res.status(201).json(savedInstructor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all instructors
exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get instructor by ID
exports.getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    res.status(200).json(instructor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update instructor by ID
exports.updateInstructor = async (req, res) => {
  try {
    const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedInstructor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete instructor by ID
exports.deleteInstructor = async (req, res) => {
  try {
    await Instructor.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Instructor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

