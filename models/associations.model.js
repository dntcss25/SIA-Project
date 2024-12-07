const Categories = require('./categories.model');
const Customers = require('./customers.model');
const Employees = require('./employees.model');
const OrderDetails = require('./orderdetails.model');
const Orders = require('./orders.model');
const Products = require('./products.model');
const Shippers = require('./shippers.model');
const Suppliers = require('./suppliers.model');

Products.belongsTo(Categories, { foreignKey: 'CategoryID' });
Categories.hasMany(Products, { foreignKey: 'CategoryID' });

Products.belongsTo(Suppliers, { foreignKey: 'SupplierID' });
Suppliers.hasMany(Products, { foreignKey: 'SupplierID' });

Orders.belongsTo(Customers, { foreignKey: 'CustomerID' });
Customers.hasMany(Orders, { foreignKey: 'CustomerID' });

Orders.belongsTo(Employees, { foreignKey: 'EmployeeID' });
Employees.hasMany(Orders, { foreignKey: 'EmployeeID' });

Orders.belongsTo(Shippers, { foreignKey: 'ShipVia' });
Shippers.hasMany(Orders, { foreignKey: 'ShipVia' });

Orders.belongsToMany(Products, { through: OrderDetails, foreignKey: 'OrderID' });
Products.belongsToMany(Orders, { through: OrderDetails, foreignKey: 'ProductID' });

OrderDetails.belongsTo(Orders, { foreignKey: 'OrderID' });
OrderDetails.belongsTo(Products, { foreignKey: 'ProductID' });
Orders.hasMany(OrderDetails, { foreignKey: 'OrderID' });
Products.hasMany(OrderDetails, { foreignKey: 'ProductID' });

module.exports = {
  Categories,
  Customers,
  Employees,
  OrderDetails,
  Orders,
  Products,
  Shippers,
  Suppliers,
};