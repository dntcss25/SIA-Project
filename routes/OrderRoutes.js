const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Validation function
const validateOrder = (order) => {
    const { CustomerID, OrderDate, TotalAmount } = order;
    if (!CustomerID || !OrderDate || !TotalAmount) {
        return 'CustomerID, OrderDate, and TotalAmount are required';
    }
    return null;
};

// GET all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ error: 'Error fetching orders' });
    }
});

// GET a single order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (error) {
        console.error('Error fetching order by ID:', error.message);
        res.status(500).json({ error: 'Error fetching order' });
    }
});

// POST a new order
router.post('/', async (req, res) => {
    const validationError = validateOrder(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ error: 'Error creating order' });
    }
});

// PUT (update) an order by ID
router.put('/:id', async (req, res) => {
    const validationError = validateOrder(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        await order.update(req.body);
        res.json(order);
    } catch (error) {
        console.error('Error updating order:', error.message);
        res.status(500).json({ error: 'Error updating order' });
    }
});

// DELETE an order by ID
router.delete('/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        await order.destroy();
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error.message);
        res.status(500).json({ error: 'Error deleting order' });
    }
});

module.exports = router;
