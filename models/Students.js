const db = require('../db');

// Get all students
exports.getAllStudents = async () => {
  const [rows] = await db.query('SELECT * FROM students');
  return rows;
};

// Create a new student
exports.createStudent = async (student) => {
  const { _id, studentNumber, firstName, lastName, email, birthday, gender, address, citizenship, avatar, contact, civilStatus, social } = student;
  const result = await db.query(
    'INSERT INTO students (_id, studentNumber, firstName, lastName, email, birthday, gender, address, citizenship, avatar, contact, civilStatus, social) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [_id, studentNumber, firstName, lastName, email, birthday, gender, address, citizenship, avatar, contact, civilStatus, social]
  );
  return result[0];
};

// Get student by ID
exports.getStudentById = async (id) => {
  const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
  return rows[0];
};

// Delete student by ID
exports.deleteStudentById = async (id) => {
  const result = await db.query('DELETE FROM students WHERE id = ?', [id]);
  return result[0];
};