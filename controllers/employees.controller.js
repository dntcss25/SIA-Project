const Employee = require('../models/employees.model.js');  

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error('Error in getAllEmployees:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error in createEmployee:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const [updated] = await Employee.update(req.body, {
      where: { EmployeeID: req.params.id }
    });
    if (updated === 0) {
      res.status(404).json({ message: 'Employee not found' });
    } else {
      const updatedEmployee = await Employee.findByPk(req.params.id);
      res.json(updatedEmployee);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.destroy({
      where: { EmployeeID: req.params.id }
    });
    if (deleted === 0) {
      res.status(404).json({ message: 'Employee not found' });
    } else {
      res.json({ message: 'Employee deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
