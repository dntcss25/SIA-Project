const express = require('express');
const router = express.Router();
const OrderDetailController = require('../controllers/orderdetails.controller.js');

router.get('/', OrderDetailController.getAllOrderDetails);
router.get('/:orderId/:productId', OrderDetailController.getOrderDetailById);
router.post('/', OrderDetailController.createOrderDetail);
router.put('/:orderId/:productId', OrderDetailController.updateOrderDetail);
router.delete('/:orderId/:productId', OrderDetailController.deleteOrderDetail);

module.exports = router;
