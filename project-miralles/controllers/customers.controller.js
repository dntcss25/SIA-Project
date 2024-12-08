const Customer = require('../models/customers.model.js');


exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.error("Error fetching customers:", error);
        res.status(500).json({ error: 'The customers could not be fetched' });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { CustomerID: req.params.id } });
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error("Error fetching customer by ID:", error);
        res.status(500).json({ error: 'The customer could not be fetched' });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        console.error("Error creating customer:", error);
        res.status(500).json({ error: 'The customer could not be created' });
    }
};


exports.updateCustomer = async (req, res) => {
    try {
        const [updated] = await Customer.update(req.body, { where: { CustomerID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Customer updated successfully' });
        } else {
            res.status(404).json({ error: 'The customer was not found' });
        }
    } catch (error) {
        console.error("Error updating customer:", error);
        res.status(500).json({ error: 'The customer could not be updated' });
    }
};


exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customer.destroy({ where: { CustomerID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'The customer has been deleted successfully.' });
        } else {
            res.status(404).json({ error: 'The customer was not found.' });
        }
    } catch (error) {
        console.error("An error occurred while deleting the customer:", error);
        res.status(500).json({ error: 'The customer could not be deleted.' });
    }
};
