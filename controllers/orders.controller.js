const Order = require('../models/orders.model.js'); 

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        console.error('Error in getAllOrders:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id); 
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error in createOrder:', error);
        res.status(400).json({ message: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const [updated] = await Order.update(req.body, {
            where: { OrderID: req.params.id } 
        });
        if (updated === 0) {
            res.status(404).json({ message: 'Order not found' });
        } else {
            const updatedOrder = await Order.findByPk(req.params.id);
            res.json(updatedOrder);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.destroy({
            where: { OrderID: req.params.id } 
        });
        if (deleted === 0) {
            res.status(404).json({ message: 'Order not found' });
        } else {
            res.json({ message: 'Order deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
