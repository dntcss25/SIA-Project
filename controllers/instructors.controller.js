const InstructorsModel = require('../models/instructors.model');

exports.getInstructors = async (req, res) => {
    try {
        console.log("get instructors");
        let instructors = await InstructorsModel.findAll();
        res.send(instructors);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

exports.getInstructorsById = async (req, res) => {
    try {
        console.log("get instructors by id");
        let id = req.params
        let instructors = await InstructorsModel.findOne(id);
        res.send(instructors);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

exports.createInstructors = async (req, res) => {
    try {
        console.log("create instructors");
        let data = req.body
        let instructors = await InstructorsModel.create(data);
        res.send(instructors);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

exports.updateInstructors = async (req, res) => {
    try {
        let id = req.params.id
        let instructors = await InstructorsModel.update( req.body, {
            where: { _id: req.params.id}
        });
        if(instructors=1){
            res.send(emp);
        }else{
            console.log('No Record')
        }
    } catch (error) {
        console.log(error);
    }
};
exports.deleteInstructors = async (req, res) => {
    try {
        await EmployeesModel.destroy({
            where: { empID: req.params.id}
        });

        if(emp=0){
            res.send(emp);
        }
        else{
            console.log('Record Deleted Successfully')
        }
        
    } catch (error) {
        console.log(error);
    }
};