const { DataTypes } = require('sequelize');  
const sequelize = require('../utils/database');  
  
    const Shipper = sequelize.define('shippers', {
        ShipperID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CompanyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'shippers',
        timestamps: false
    });

    module.exports = Shipper;

