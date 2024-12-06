const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// GET all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees.map(e => e.toJSON())); 
    } catch (error) {
        console.error('Error fetching employees:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// GET a single employee by ID
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json(employee.toJSON()); 
    } catch (error) {
        console.error('Error fetching employee by ID:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// POST a new employee
router.post('/', async (req, res) => {
    try {
        // Ensure required fields are present
        const { FirstName, LastName } = req.body;
        if (!FirstName || !LastName) {
            return res.status(400).json({ message: 'FirstName and LastName are required' });
        }

        const employee = await Employee.create(req.body);
        res.status(201).json(employee.toJSON()); 
    } catch (error) {
        console.error('Error creating employee:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// PUT (update) an employee by ID
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });

        const { FirstName, LastName } = req.body;
        if (!FirstName || !LastName) {
            return res.status(400).json({ message: 'FirstName and LastName are required' });
        }

        await employee.update(req.body);
        res.json(employee.toJSON()); 
    } catch (error) {
        console.error('Error updating employee:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// DELETE an employee by ID
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        await employee.destroy();
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
