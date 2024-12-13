const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Shipper = sequelize.define('Shipper', {
    ShippedID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CompanyName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'shippers',
    timestamps: false
});

module.exports = Shipper;