const express = require('express');
const Shipper = require('../models/Shipper');
const router = express.Router();

// Validation function
const validateShipper = (shipper) => {
    const { ShipperName } = shipper;
    if (!ShipperName) {
        return 'ShipperName is required';
    }
    return null;
};

// GET all shippers
router.get('/', async (req, res) => {
    try {
        const shippers = await Shipper.findAll();
        res.json(shippers);
    } catch (error) {
        console.error('Error fetching shippers:', error.message);
        res.status(500).json({ error: 'Error fetching shippers' });
    }
});

// GET a single shipper by ID
router.get('/:id', async (req, res) => {
    try {
        const shipper = await Shipper.findByPk(req.params.id);
        if (!shipper) return res.status(404).json({ message: 'Shipper not found' });
        res.json(shipper);
    } catch (error) {
        console.error('Error fetching shipper by ID:', error.message);
        res.status(500).json({ error: 'Error fetching shipper' });
    }
});

// POST a new shipper
router.post('/', async (req, res) => {
    const validationError = validateShipper(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const shipper = await Shipper.create(req.body);
        res.status(201).json(shipper);
    } catch (error) {
        console.error('Error creating shipper:', error.message);
        res.status(500).json({ error: 'Error creating shipper' });
    }
});

// PUT (update) a shipper by ID
router.put('/:id', async (req, res) => {
    const validationError = validateShipper(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const shipper = await Shipper.findByPk(req.params.id);
        if (!shipper) return res.status(404).json({ message: 'Shipper not found' });
        await shipper.update(req.body);
        res.json(shipper);
    } catch (error) {
        console.error('Error updating shipper:', error.message);
        res.status(500).json({ error: 'Error updating shipper' });
    }
});

// DELETE a shipper by ID
router.delete('/:id', async (req, res) => {
    try {
        const shipper = await Shipper.findByPk(req.params.id);
        if (!shipper) return res.status(404).json({ message: 'Shipper not found' });
        await shipper.destroy();
        res.json({ message: 'Shipper deleted successfully' });
    } catch (error) {
        console.error('Error deleting shipper:', error.message);
        res.status(500).json({ error: 'Error deleting shipper' });
    }
});

module.exports = router;
