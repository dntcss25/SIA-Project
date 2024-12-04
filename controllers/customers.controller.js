const Customers = require('../models/customers.model');

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customers.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customers.findOne({ where: { CustomerID: req.params.id } });
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const { CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax } = req.body;
        const customer = await Customers.create({ CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax });
        res.status(201).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customers.update(req.body, { where: { CustomerID: req.params.id } });
        if (customer[0] === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customers.destroy({ where: { CustomerID: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
