const { DataTypes } = require('sequelize');
const sequelize = require('../config/sotaso-backend-db');

const Shipper = sequelize.define('Shipper', {
    ShipperID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CompanyName: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING },
});

module.exports = Shipper;
