// for Students
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  _id: Number,
  studentNo: Number,
  firstName: String,
  lastName: String,
  email: String,
  birthday: Date,
  gender: String,
  address: {
    type: Map,
    of: String
  },
  citizenship: String,
  avatar: {
    type: Map,
    of: String
  },
  contact: String,
  civilStatus: String,
  social: String
});

const Student = mongoose.model('Student', studentSchema);

// for StudentInfo
const studentInfoSchema = new Schema({
    _id: Number,
    studentId: {
      type: Number,
      ref: 'Student'
    },
    yearLevel: Number,
    course: String,
    section: String,
    instructorId: {
      type: Number,
      ref: 'Instructor'
    }
  });
  
  const StudentInfo = mongoose.model('StudentInfo', studentInfoSchema);

  // for Instructors
const instructorSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    subject: String,
    degree: String,
    birthday: Date,
    email: String,
    contact: String,
    avatar: {
      type: Map,
      of: String
    }
  });
  
  const Instructor = mongoose.model('Instructor', instructorSchema);
  
  