 const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const Shippers = sequelize.define('Shippers', {
        ShipperID: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        CompanyName: {
            type: DataType.STRING,
            allowNull: true
        },
        Phone: {
            type: DataType.INTEGER,
            allowNull: true,
        },createdAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        
        
        
    }, {
        tableName: 'shippers' 
    });
module.exports = Shippers;
