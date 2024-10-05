const InstructorsModel = require('../models/instructors.model');

exports.getInstructors = async (req, res) => {
    try {
        console.log("instructors");
        let instructors = await InstructorsModel.findAll();
        res.send(instructors);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};