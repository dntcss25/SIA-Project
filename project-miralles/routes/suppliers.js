const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/suppliers.controller.js');

router.get('/suppliers', supplierController.getAllSuppliers);
router.post('/suppliers', supplierController.createSupplier);
router.put('/suppliers/:id', supplierController.updateSupplier);
router.delete('/suppliers/:id', supplierController.deleteSupplier);

module.exports = router;
