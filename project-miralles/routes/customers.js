const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customers.controller.js');

router.get('/customers', customerController.getAllCustomers);
router.post('/customers', customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
