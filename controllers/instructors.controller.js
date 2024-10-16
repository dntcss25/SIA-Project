const Instructors = require('../models/instructors.model.js');
const InstructorsModel = require('../models/instructors.model.js');

exports.getInstructor = async (req, res) => {
    try {
        console.log("instructors")
        let instructors = await InstructorsModel.findAll();
        res.send(instructors);
    } catch(error) {
        console.log(error)
        res.status(500).send("Error retrieving instructors");
    }
}

exports.createInstructor = async (req, res) => {
    try {
        const newInstructor = await InstructorsModel.create(req.body);
        res.status(201).send(newInstructor);
    } catch(error) {
        console.log(error)
        res.status(500).send("Error creating instructor");
    }
}

exports.updateInstructor = async (req, res) => {
    try {
        const updated = await InstructorsModel.update(req.body, {
            where: { _id: req.params.id }
        });
        if (updated[0] === 0) {
            res.status(404).send("Instructor not found");
        } else {
            res.send("Instructor updated successfully");
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error updating instructor");
    }
}

exports.deleteInstructor = async (req, res) => {
    try {
        const deleted = await InstructorsModel.destroy({
            where: { _id: req.params.id }
        });
        if (deleted === 0) {
            res.status(404).send("Instructor not found");
        } else {
            res.send("Instructor deleted successfully");
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error deleting instructor");
    }
}