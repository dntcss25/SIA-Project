const Employees = require('../models/employees.model.js');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employees.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployeesById = async (req, res) => {
    try {
        const employees = await Employees.findByPk(req.params.id);
        employees ? res.status(200).json(employees) : res.status(404).json({ message: 'Employee not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEmployees = async (req, res) => {
    try {
        const newEmployees = await Employees.create(req.body);
        res.status(201).json(newEmployees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEmployees = async (req, res) => {
    try {
        const [updated] = await Employees.update(req.body, { where: { EmployeeID: req.params.id } });
        updated ? res.status(200).json(await Employees.findByPk(req.params.id)) : res.status(404).json({ message: 'Employee not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEmployees = async (req, res) => {
    try {
        const deleted = await Employees.destroy({ where: { EmployeeID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Employee not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};