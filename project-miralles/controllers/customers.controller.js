const Customer = require('../models/customers.model.js');

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.error("Error fetching customers:", error);
        res.status(500).json({ error: 'Could not fetch customers' });
    }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        console.error("Error creating customer:", error);
        res.status(500).json({ error: 'Could not create customer' });
    }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
    try {
        const [updated] = await Customer.update(req.body, { where: { CustomerID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Customer updated successfully' });
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error("Error updating customer:", error);
        res.status(500).json({ error: 'Could not update customer' });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customer.destroy({ where: { CustomerID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Customer deleted successfully' });
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error("Error deleting customer:", error);
        res.status(500).json({ error: 'Could not delete customer' });
    }
};
