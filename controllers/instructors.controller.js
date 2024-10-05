const Instructors = require('../models/instructors.model.js');
const InstructorsModel = require('../models/instructors.model.js');

exports.getInstructor = async (req, res) => {
    try {
        console.log("instructors")
        let instructors = await InstructorsModel.findAll();
        res.send(instructors);
    } catch(error) {
        console.log(error)
    }
}