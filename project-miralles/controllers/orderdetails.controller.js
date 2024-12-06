const OrderDetail = require('../models/orderdetails.model.js');

// Get all order details
exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        console.error("Error fetching order details:", error);
        res.status(500).json({ error: 'Could not fetch order details' });
    }
};


exports.createOrderDetails = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.create(req.body);
        res.status(201).json(orderDetail);
    } catch (error) {
        console.error("Error creating order detail:", error);
        res.status(500).json({ error: 'Could not create order detail' });
    }
};

exports.updateOrderDetails = async (req, res) => {
    try {
        const [updated] = await OrderDetail.update(req.body, { where: { OrderDetailID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Order detail updated successfully' });
        } else {
            res.status(404).json({ error: 'Order detail not found' });
        }
    } catch (error) {
        console.error("Error updating order detail:", error);
        res.status(500).json({ error: 'Could not update order detail' });
    }
};

exports.deleteOrderDetails = async (req, res) => {
    try {
        const deleted = await OrderDetail.destroy({ where: { OrderDetailID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Order detail deleted successfully' });
        } else {
            res.status(404).json({ error: 'Order detail not found' });
        }
    } catch (error) {
        console.error("Error deleting order detail:", error);
        res.status(500).json({ error: 'Could not delete order detail' });
    }
};
