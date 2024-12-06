const { DataTypes } = require('sequelize');
const sequelize = require('../config/sotaso-backend-db');
const Customer = require('./Customer');
const Employee = require('./Employee');
const Shipper = require('./Shipper');

const Order = sequelize.define('Order', {
    OrderID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CustomerID: { type: DataTypes.INTEGER },
    EmployeeID: { type: DataTypes.INTEGER },
    OrderDate: { type: DataTypes.DATE },
    RequiredDate: { type: DataTypes.DATE },
    ShippedDate: { type: DataTypes.DATE },
    ShipVia: { type: DataTypes.INTEGER },
    Freight: { type: DataTypes.DECIMAL(10, 2) },
    ShipName: { type: DataTypes.STRING },
    ShipAddress: { type: DataTypes.STRING },
    ShipCity: { type: DataTypes.STRING },
    ShipRegion: { type: DataTypes.STRING },
    ShipPostalCode: { type: DataTypes.STRING },
    ShipCountry: { type: DataTypes.STRING },
});

Order.belongsTo(Customer, { foreignKey: 'CustomerID' });
Order.belongsTo(Employee, { foreignKey: 'EmployeeID' });
Order.belongsTo(Shipper, { foreignKey: 'ShipVia' });

module.exports = Order;
