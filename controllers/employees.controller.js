const Employees = require('../models/employees.model');

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employees.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employees.findOne({ where: { EmployeeID: req.params.id } });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const { LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo } = req.body;
        const employee = await Employees.create({ LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo });
        res.status(201).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employees.update(req.body, { where: { EmployeeID: req.params.id } });
        if (employee[0] === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const deleted = await Employees.destroy({ where: { EmployeeID: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};