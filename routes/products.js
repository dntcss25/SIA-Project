const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products.controller.js');

router.get('/', ProductsController.getAllProducts);
router.post('/', ProductsController.createProducts);

router.get('/:id', ProductsController.getProductsById);
router.put('/:id', ProductsController.updateProducts);
router.delete('/:id', ProductsController.deleteProducts);
module.exports = router;