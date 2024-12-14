const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const OrderDetail = sequelize.define('OrderDetail', {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'OrderID'
  },
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'ProductID'
  },
  UnitPrice: {
    type: DataTypes.DECIMAL(10, 4),
    allowNull: false,
    field: 'UnitPrice'
  },
  Quantity: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    field: 'Quantity'
  },
  Discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'Discount'
  }
}, {
  tableName: 'order_details',
  timestamps: false
});

module.exports = OrderDetail;

