const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

// GET all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers.map(c => c.toJSON()));
    } catch (error) {
        console.error('Error fetching customers:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// GET a single customer by ID
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.json(customer.toJSON()); 
    } catch (error) {
        console.error('Error fetching customer by ID:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// POST a new customer
router.post('/', async (req, res) => {
    try {

        const { CompanyName } = req.body;
        if (!CompanyName) {
            return res.status(400).json({ message: 'CompanyName is required' });
        }

        const customer = await Customer.create(req.body);
        res.status(201).json(customer.toJSON()); 
    } catch (error) {
        console.error('Error creating customer:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// PUT (update) a customer by ID
router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });

        const { CompanyName } = req.body;
        if (!CompanyName) {
            return res.status(400).json({ message: 'CompanyName is required' });
        }

        await customer.update(req.body);
        res.json(customer.toJSON());
    } catch (error) {
        console.error('Error updating customer:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// DELETE a customer by ID
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        await customer.destroy();
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
