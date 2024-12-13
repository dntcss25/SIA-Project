const express = require('express');
const router = express.Router();
const {
    getOrderDetails,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
} = require('../controllers/orderDetails.controller');

// Routes for order details
router.get('/', getOrderDetails);
router.get('/:id', getOrderDetailById);
router.post('/', createOrderDetail);
router.put('/:id', updateOrderDetail);
router.delete('/:id', deleteOrderDetail);

module.exports = router;