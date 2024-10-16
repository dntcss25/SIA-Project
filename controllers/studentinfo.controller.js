const StudentInfo = require('../models/studentinfo.model.js');
const StudentInfoModel = require('../models/studentinfo.model.js');

exports.getStudentInfo = async (req, res) => {
    try {
        console.log("studentinfo")
        let studentInfo = await StudentInfoModel.findAll();
        res.send(studentInfo);
    } catch(error) {
        console.log(error)
        res.status(500).send("Error retrieving student info");
    }
}

exports.createStudentInfo = async (req, res) => {
    try {
        const newStudentInfo = await StudentInfoModel.create(req.body);
        res.status(201).send(newStudentInfo);
    } catch(error) {
        console.log(error)
        res.status(500).send("Error creating student info");
    }
}

exports.updateStudentInfo = async (req, res) => {
    try {
        const updated = await StudentInfoModel.update(req.body, {
            where: { _id: req.params.id }
        });
        if (updated[0] === 0) {
            res.status(404).send("Student info not found");
        } else {
            res.send("Student info updated successfully");
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error updating student info");
    }
}

exports.deleteStudentInfo = async (req, res) => {
    try {
        const deleted = await StudentInfoModel.destroy({
            where: { _id: req.params.id }
        });
        if (deleted === 0) {
            res.status(404).send("Student info not found");
        } else {
            res.send("Student info deleted successfully");
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error deleting student info");
    }
}