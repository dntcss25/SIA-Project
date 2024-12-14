const OrderDetail = require('../models/order-detail.model');

exports.getAllOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetail.findAll();
    res.json(orderDetails);
  } catch (error) {
    console.error('Error in getAllOrderDetails:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderDetailById = async (req, res) => {
  try {
    const orderDetail = await OrderDetail.findOne({
      where: {
        OrderID: req.params.orderId,
        ProductID: req.params.productId
      }
    });
    if (orderDetail) {
      res.json(orderDetail);
    } else {
      res.status(404).json({ message: 'Order Detail not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrderDetail = async (req, res) => {
  try {
    const newOrderDetail = await OrderDetail.create(req.body);
    res.status(201).json(newOrderDetail);
  } catch (error) {
    console.error('Error in createOrderDetail:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateOrderDetail = async (req, res) => {
  try {
    const [updated] = await OrderDetail.update(req.body, {
      where: {
        OrderID: req.params.orderId,
        ProductID: req.params.productId
      }
    });
    if (updated === 0) {
      res.status(404).json({ message: 'Order Detail not found' });
    } else {
      const updatedOrderDetail = await OrderDetail.findOne({
        where: {
          OrderID: req.params.orderId,
          ProductID: req.params.productId
        }
      });
      res.json(updatedOrderDetail);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteOrderDetail = async (req, res) => {
  try {
    const deleted = await OrderDetail.destroy({
      where: {
        OrderID: req.params.orderId,
        ProductID: req.params.productId
      }
    });
    if (deleted === 0) {
      res.status(404).json({ message: 'Order Detail not found' });
    } else {
      res.json({ message: 'Order Detail deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

