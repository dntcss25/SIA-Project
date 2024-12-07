const Customers = require('../models/customers.model.js');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customers.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomersById = async (req, res) => {
    try {
        const customers = await Customers.findByPk(req.params.id);
        customers ? res.status(200).json(customers) : res.status(404).json({ message: 'Customer not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCustomers = async (req, res) => {
    try {
        const newCustomers = await Customers.create(req.body);
        res.status(201).json(newCustomers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomers = async (req, res) => {
    try {
        const [updated] = await Customers.update(req.body, { where: { CustomerID: req.params.id } });
        updated ? res.status(200).json(await Customers.findByPk(req.params.id)) : res.status(404).json({ message: 'Customer not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomers = async (req, res) => {
    try {
        const deleted = await Customers.destroy({ where: { CustomerID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Customer not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};