const express = require('express');
const OrderDetail = require('../models/OrderDetail');
const router = express.Router();

// GET all order details
router.get('/', async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.json(orderDetails.map(od => od.toJSON()));
    } catch (error) {
        console.error('Error fetching order details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// GET a single order detail by ID
router.get('/:id', async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByPk(req.params.id);
        if (!orderDetail) return res.status(404).json({ message: 'Order detail not found' });
        res.json(orderDetail.toJSON());
    } catch (error) {
        console.error('Error fetching order detail by ID:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// POST a new order detail
router.post('/', async (req, res) => {
    try {
        const { OrderID, ProductID, Quantity, Price } = req.body;

        if (!OrderID || !ProductID || !Quantity || !Price) {
            return res.status(400).json({ message: 'OrderID, ProductID, Quantity, and Price are required' });
        }

        const orderDetail = await OrderDetail.create(req.body);
        res.status(201).json(orderDetail.toJSON()); 
    } catch (error) {
        console.error('Error creating order detail:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// PUT (update) an order detail by ID
router.put('/:id', async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByPk(req.params.id);
        if (!orderDetail) return res.status(404).json({ message: 'Order detail not found' });

        const { OrderID, ProductID, Quantity, Price } = req.body;

        if (!OrderID || !ProductID || !Quantity || !Price) {
            return res.status(400).json({ message: 'OrderID, ProductID, Quantity, and Price are required' });
        }

        await orderDetail.update(req.body);
        res.json(orderDetail.toJSON());
    } catch (error) {
        console.error('Error updating order detail:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// DELETE an order detail by ID
router.delete('/:id', async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByPk(req.params.id);
        if (!orderDetail) return res.status(404).json({ message: 'Order detail not found' });
        await orderDetail.destroy();
        res.json({ message: 'Order detail deleted successfully' });
    } catch (error) {
        console.error('Error deleting order detail:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
