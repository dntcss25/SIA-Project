const Customer = require('../models/customer.model');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error('Error in getAllCustomers:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error in createCustomer:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { CustomerID: req.params.id }
    });
    if (updated === 0) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      const updatedCustomer = await Customer.findByPk(req.params.id);
      res.json(updatedCustomer);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const deleted = await Customer.destroy({
      where: { CustomerID: req.params.id }
    });
    if (deleted === 0) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.json({ message: 'Customer deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

