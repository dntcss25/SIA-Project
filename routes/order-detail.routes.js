const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/order-detail.controller');

router.get('/', orderDetailController.getAllOrderDetails);
router.get('/:orderId/:productId', orderDetailController.getOrderDetailById);
router.post('/', orderDetailController.createOrderDetail);
router.put('/:orderId/:productId', orderDetailController.updateOrderDetail);
router.delete('/:orderId/:productId', orderDetailController.deleteOrderDetail);

module.exports = router;