const Employee = require('../models/employees.model.js');

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: 'Could not fetch employees' });
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({ error: 'Could not create employee' });
    }
};

// Update an existing employee
exports.updateEmployee = async (req, res) => {
    try {
        const [updated] = await Employee.update(req.body, { where: { EmployeeID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Employee updated successfully' });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ error: 'Could not update employee' });
    }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const deleted = await Employee.destroy({ where: { EmployeeID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Employee deleted successfully' });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ error: 'Could not delete employee' });
    }
};
