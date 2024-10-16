const Students = require('../models/students.model.js');
const StudentsModel = require('../models/students.model.js');

exports.getStudents = async (req, res) => {
    try {
        console.log("students")
        let students = await StudentsModel.findAll();
        res.send(students);
    } catch(error) {
        console.log(error)
        res.status(500).send("Error retrieving students");
    }
}

exports.createStudent = async (req, res) => {
    try {
        const newStudent = await StudentsModel.create(req.body);
        res.status(201).send(newStudent);
    } catch(error) {
        console.log(error)
        res.status(500).send("Error creating student");
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const updated = await StudentsModel.update(req.body, {
            where: { _id: req.params.id }
        });
        if (updated[0] === 0) {
            res.status(404).send("Student not found");
        } else {
            res.send("Student updated successfully");
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error updating student");
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await StudentsModel.destroy({
            where: { _id: req.params.id }
        });
        if (deleted === 0) {
            res.status(404).send("Student not found");
        } else {
            res.send("Student deleted successfully");
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error deleting student");
    }
}