const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Order = sequelize.define('Order', {
    OrderID: {  
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,  
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
    Freight: {  
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, 
    },
    OrderDate: {  
        type: DataTypes.DATE,
        allowNull: true,  
    },
    RequiredDate: {  
        type: DataTypes.DATE,
        allowNull: true,  
    },
    ShipAddress: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ShipCity: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ShipCountry: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ShipName: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ShippedDate: {  
        type: DataTypes.DATE,
        allowNull: true,  
    },
    ShipPostalCode: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ShipRegion: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ShipVia: {  
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'orders',  
    timestamps: false,    
});

module.exports = Order;
