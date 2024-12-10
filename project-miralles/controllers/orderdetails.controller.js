const OrderDetail = require('../models/orderdetails.model.js');


exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        console.error("Error fetching order details:", error);
        res.status(500).json({ error: 'The order details could not be fetched.' });
    }
};

exports.getOrderDetailById = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findOne({ where: { OrderID: req.params.id } });
        if (orderDetail) {
            res.status(200).json(orderDetail);
        } else {
            res.status(404).json({ error: 'Order detail not found' });
        }
    } catch (error) {
        console.error("Error fetching order detail by ID:", error);
        res.status(500).json({ error: 'The order detail could not be fetched' });
    }
};


exports.createOrderDetails = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.create(req.body);
        res.status(201).json(orderDetail);
    } catch (error) {
        console.error("Error creating order detail:", error);
        res.status(500).json({ error: 'The order detail could not be created.' });
    }
};

exports.updateOrderDetails = async (req, res) => {
    try {
        const [updated] = await OrderDetail.update(req.body, { where: { OrderID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'The order detail has been updated successfully.' });
        } else {
            res.status(404).json({ error: 'The order detail was not found.' });
        }
    } catch (error) {
        console.error("Error updating order detail:", error);
        res.status(500).json({ error: 'The order detail could not be updated.' });
    }
};

exports.deleteOrderDetails = async (req, res) => {
    try {
        const deleted = await OrderDetail.destroy({ where: { OrderID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'The order detail has been deleted successfully.' });
        } else {
            res.status(404).json({ error: 'The order detail was not found.' });
        }
    } catch (error) {
        console.error("Error deleting order detail:", error);
        res.status(500).json({ error: 'Could not delete order detail' });
    }
};
