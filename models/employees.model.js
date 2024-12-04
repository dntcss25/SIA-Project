const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Employee = sequelize.define('Employee', {
    EmployeeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LastName: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    FirstName: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    TitleOfCourtesy: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    BirthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    HireDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    City: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Region: {
        type: DataTypes.STRING(50),
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
    HomePhone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Extension: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Photo: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
            isJson(value) {
                try {
                    JSON.parse(value);
                } catch (e) {
                    throw new Error('Invalid JSON format');
                }
            }
        }
    },
    Notes: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    ReportsTo: {
        type: DataTypes.STRING(225),
        allowNull: false
    }
}, {
    tableName: 'employees',
    timestamps: false
});

module.exports = Employee;
