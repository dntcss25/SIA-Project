const express = require('express');
const router = express.Router();
const orderDetailsController = require('../controllers/orderdetails.controller.js');

router.get('/orderdetails', orderDetailsController.getAllOrderDetails);
router.get('/orderdetails/:id', orderDetailsController.getOrderDetailById);
router.post('/orderdetails', orderDetailsController.createOrderDetails);
router.put('/orderdetails/:id', orderDetailsController.updateOrderDetails);
router.delete('/orderdetails/:id', orderDetailsController.deleteOrderDetails);

module.exports = router;
