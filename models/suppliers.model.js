const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Supplier = sequelize.define('Supplier', {
    SupplierID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CompanyName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ContactName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ContactTitle: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    City: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Region: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    PostalCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Country: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Fax: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    HomePage: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
}, {
    tableName: 'suppliers',
    timestamps: false
});

module.exports = Supplier;