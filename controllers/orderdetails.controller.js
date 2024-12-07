const OrderDetails = require('../models/orderdetails.model.js');

exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetails.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrderDetailsById = async (req, res) => {
    try {
        const orderDetails = await OrderDetails.findByPk(req.params.id);
        orderDetails ? res.status(200).json(orderDetails) : res.status(404).json({ message: 'Order Details not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createOrderDetails = async (req, res) => {
    try {
        const newOrderDetails = await OrderDetails.create(req.body);
        res.status(201).json(newOrderDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrderDetails = async (req, res) => {
    try {
        const [updated] = await OrderDetails.update(req.body, { where: { OrderID: req.params.id } });
        updated ? res.status(200).json(await OrderDetails.findByPk(req.params.id)) : res.status(404).json({ message: 'Order Details not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOrderDetails = async (req, res) => {
    try {
        const deleted = await OrderDetails.destroy({ where: { OrderID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Order Details not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};