const Order = require('../models/orders.model.js');

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: 'Could not fetch orders' });
    }
};

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: 'Could not create order' });
    }
};

// Update an existing order
exports.updateOrder = async (req, res) => {
    try {
        const [updated] = await Order.update(req.body, { where: { OrderID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Order updated successfully' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ error: 'Could not update order' });
    }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.destroy({ where: { OrderID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ error: 'Could not delete order' });
    }
};
