const Order = require('../models/orders.model.js');


exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: 'The orders could not be fetched.' });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({ where: { OrderID: req.params.id } });
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error("Error fetching order by ID:", error);
        res.status(500).json({ error: 'The order could not be fetched' });
    }
};


exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: 'The order could not be created.' });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const [updated] = await Order.update(req.body, { where: { OrderID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'The order has been updated successfully.' });
        } else {
            res.status(404).json({ error: 'The order was not found.' });
        }
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ error: 'The order could not be updated.' });
    }
};


exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.destroy({ where: { OrderID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'The order has been deleted successfully.' });
        } else {
            res.status(404).json({ error: 'The order was not found.' });
        }
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ error: 'The order could not be deleted.' });
    }
};
