const express = require('express');
const Supplier = require('../models/Supplier');
const router = express.Router();

// Validation function
const validateSupplier = (supplier) => {
    const { SupplierName, ContactName } = supplier;
    if (!SupplierName) {
        return 'SupplierName is required';
    }
    if (!ContactName) {
        return 'ContactName is required';
    }
    return null;
};

// GET all suppliers
router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.json(suppliers);
    } catch (error) {
        console.error('Error fetching suppliers:', error.message);
        res.status(500).json({ error: 'Error fetching suppliers' });
    }
});

// GET a single supplier by ID
router.get('/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.json(supplier);
    } catch (error) {
        console.error('Error fetching supplier by ID:', error.message);
        res.status(500).json({ error: 'Error fetching supplier' });
    }
});

// POST a new supplier
router.post('/', async (req, res) => {
    const validationError = validateSupplier(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        console.error('Error creating supplier:', error.message);
        res.status(500).json({ error: 'Error creating supplier' });
    }
});

// PUT (update) a supplier by ID
router.put('/:id', async (req, res) => {
    const validationError = validateSupplier(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        await supplier.update(req.body);
        res.json(supplier);
    } catch (error) {
        console.error('Error updating supplier:', error.message);
        res.status(500).json({ error: 'Error updating supplier' });
    }
});

// DELETE a supplier by ID
router.delete('/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        await supplier.destroy();
        res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        console.error('Error deleting supplier:', error.message);
        res.status(500).json({ error: 'Error deleting supplier' });
    }
});

module.exports = router;
