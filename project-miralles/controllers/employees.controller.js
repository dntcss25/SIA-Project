const Employee = require('../models/employees.model.js');


exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: 'The employees could not be fetched.' });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findOne({ where: { EmployeeID: req.params.id } });
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        console.error("Error fetching employee by ID:", error);
        res.status(500).json({ error: 'The employee could not be fetched' });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({ error: 'The employee could not be created.' });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const [updated] = await Employee.update(req.body, { where: { EmployeeID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'The employee has been updated successfully.' });
        } else {
            res.status(404).json({ error: 'The employee was not found.' });
        }
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ error: 'The employee could not be updated.' });
    }
};


exports.deleteEmployee = async (req, res) => {
    try {
        const deleted = await Employee.destroy({ where: { EmployeeID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Employee has been deleted successfully' });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ error: 'Could not delete employee' });
    }
};
