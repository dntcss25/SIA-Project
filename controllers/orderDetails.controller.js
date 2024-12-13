const OrderDetails = require('../models/orderDetails.model');

exports.getOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetails.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getOrderDetailById = async (req, res) => {
    try {
        // Find order detail by primary key
        const orderDetail = await OrderDetails.findOne({
            where: { OrderID: req.params.orderId, ProductID: req.params.productId },
            include: [
                {
                    model: Order,
                    attributes: ['OrderDate', 'CustomerID']
                }
            ]
        });

        if (!orderDetail) {
            return res.status(404).json({ message: 'Order detail not found' });
        }

        res.status(200).json(orderDetail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.createOrderDetail = async (req, res) => {
    try {
        console.log("Incoming data:", req.body);

        const { OrderID, ProductID, UnitPrice, Quantity, Discount } = req.body;

        if (Quantity == null) {
            return res.status(400).json({ message: "'Quantity' field is required and cannot be null." });
        }

        const orderDetail = await OrderDetails.create({ OrderID, ProductID, UnitPrice, Quantity, Discount });
        res.status(201).json(orderDetail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};



exports.updateOrderDetail = async (req, res) => {
    try {
        if ('Quantity' in req.body && req.body.Quantity == null) {
            return res.status(400).json({ message: "'Quantity' cannot be null." });
        }

        const [rowsAffected, updatedRows] = await OrderDetails.update(req.body, { 
            where: { OrderID: req.params.orderId, ProductID: req.params.productId },
            returning: true // Return updated rows
        });

        if (rowsAffected === 0) {
            return res.status(404).json({ message: 'Order detail not found' });
        }

        res.status(200).json({ 
            message: 'Order detail updated successfully', 
            data: updatedRows 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteOrderDetail = async (req, res) => {
    try {
        const deleted = await OrderDetails.destroy({ where: { OrderID: req.params.orderId, ProductID: req.params.productId } });
        if (!deleted) {
            return res.status(404).json({ message: 'Order detail not found' });
        }
        res.status(200).json({ message: 'Order detail deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};