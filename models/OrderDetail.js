const { DataTypes } = require('sequelize');
const sequelize = require('../config/sotaso-backend-db');
const Order = require('./Order');
const Product = require('./Product');

const OrderDetail = sequelize.define('OrderDetail', {
    OrderID: { type: DataTypes.INTEGER, primaryKey: true },
    ProductID: { type: DataTypes.INTEGER, primaryKey: true },
    UnitPrice: { type: DataTypes.DECIMAL(10, 2) },
    Quantity: { type: DataTypes.INTEGER },
    Discount: { type: DataTypes.FLOAT },
});

OrderDetail.belongsTo(Order, { foreignKey: 'OrderID' });
OrderDetail.belongsTo(Product, { foreignKey: 'ProductID' });

module.exports = OrderDetail;
