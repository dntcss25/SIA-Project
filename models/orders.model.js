const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CustomerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'CustomerID'
        }
    },
    EmployeeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'employees',
            key: 'EmployeeID'
        }
    },
    OrderDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    RequiredDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ShippedDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ShipVia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'shippers',
            key: 'ShippedID'
        }
    },
    Freight: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    ShipName: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    ShipAddress: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    ShipCity: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    ShipRegion: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    ShipPostalCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ShipCountry: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'orders',
    paranoid: true
});

module.exports = Order;
