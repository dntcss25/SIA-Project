const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Employee = sequelize.define('Employee', {
    EmployeeID: {  
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Address: {  
        type: DataTypes.STRING,
        allowNull: true, 
    },
    BirthDate: {  
        type: DataTypes.DATE,
        allowNull: true,
    },
    City: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Country: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Extension: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    FirstName: {  
        type: DataTypes.STRING,
        allowNull: false,
    },
    HireDate: {  
        type: DataTypes.DATE,
        allowNull: true,
    },
    HomePhone: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    LastName: {  
        type: DataTypes.STRING,
        allowNull: false,
    },
    Notes: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Photo: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    PostalCode: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Region: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ReportsTo: {  
        type: DataTypes.INTEGER,  
        allowNull: true,
    },
    Title: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    TitleOfCourtesy: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'employees', 
    timestamps: false,  
});

module.exports = Employee;
