const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Shipper = sequelize.define('Shipper', {
    ShipperID: {  
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    CompanyName: {  
        type: DataTypes.STRING,
        allowNull: false, 
    },
    Phone: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'shippers',  
    timestamps: false,  
});

module.exports = Shipper;
