const Orders = require('../models/orders.model.js');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrdersById = async (req, res) => {
    try {
        const orders = await Orders.findByPk(req.params.id);
        Orders ? res.status(200).json(orders) : res.status(404).json({ message: 'Orders not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createOrders = async (req, res) => {
    try {
        const newOrders = await Orders.create(req.body);
        res.status(201).json(newOrders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrders = async (req, res) => {
    try {
        const [updated] = await Orders.update(req.body, { where: { OrderID: req.params.id } });
        updated ? res.status(200).json(await Orders.findByPk(req.params.id)) : res.status(404).json({ message: 'Orders not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOrders = async (req, res) => {
    try {
        const deleted = await Orders.destroy({ where: { OrderID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Orders not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};