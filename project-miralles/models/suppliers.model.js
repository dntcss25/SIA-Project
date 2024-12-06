const { DataTypes } = require('sequelize'); 
const sequelize = require('../utils/database');  

    const Supplier = sequelize.define('suppliers', {
        SupplierID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CompanyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ContactName: {
            type: DataTypes.STRING
        },
        ContactTitle: {
            type: DataTypes.STRING
        },
        Address: {
            type: DataTypes.STRING
        },
        City: {
            type: DataTypes.STRING
        },
        Region: {
            type: DataTypes.STRING
        },
        PostalCode: {
            type: DataTypes.STRING
        },
        Country: {
            type: DataTypes.STRING
        },
        Phone: {
            type: DataTypes.STRING
        },
        Fax: {
            type: DataTypes.STRING
        },
        HomePage: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'suppliers',
        timestamps: false
    });
  
    module.exports = Supplier;