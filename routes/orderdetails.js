const express = require('express');
const router = express.Router();
const OrderDetailsController = require('../controllers/orderdetails.controller.js');

router.get('/', OrderDetailsController.getAllOrderDetails);
router.post('/', OrderDetailsController.createOrderDetails);

router.get('/:id', OrderDetailsController.getOrderDetailsById);
router.put('/:id', OrderDetailsController.updateOrderDetails);
router.delete('/:id', OrderDetailsController.deleteOrderDetails);
module.exports = router;