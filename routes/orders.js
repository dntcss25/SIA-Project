const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/orders.controller.js');

router.get('/', OrdersController.getAllOrders);
router.post('/', OrdersController.createOrders);

router.get('/:id', OrdersController.getOrdersById);
router.put('/:id', OrdersController.updateOrders);
router.delete('/:id', OrdersController.deleteOrders);
module.exports = router;