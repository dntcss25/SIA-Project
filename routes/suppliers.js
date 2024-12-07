const express = require('express');
const router = express.Router();
const SuppliersController = require('../controllers/suppliers.controller.js');

router.get('/', SuppliersController.getAllSuppliers);
router.post('/', SuppliersController.createSuppliers);

router.get('/:id', SuppliersController.getSuppliersById);
router.put('/:id', SuppliersController.updateSuppliers);
router.delete('/:id', SuppliersController.deleteSuppliers);
module.exports = router;