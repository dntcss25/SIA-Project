const express = require('express');
const router = express.Router();
const CustomersController = require('../controllers/customers.controller.js');

router.get('/', CustomersController.getAllCustomers);
router.post('/', CustomersController.createCustomers);

router.get('/:id', CustomersController.getCustomersById);
router.put('/:id', CustomersController.updateCustomers);
router.delete('/:id', CustomersController.deleteCustomers);
module.exports = router;