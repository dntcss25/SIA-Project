const express = require('express');  // Import express
const bodyParser = require('body-parser');

// Import route files
const SupplierRoutes = require('./routes/SupplierRoutes');
const CategoryRoutes = require('./routes/CategoryRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const CustomerRoutes = require('./routes/CustomerRoutes');
const EmployeeRoutes = require('./routes/EmployeeRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const OrderDetailRoutes = require('./routes/OrderDetailRoutes');  // Fixed case
const ShipperRoutes = require('./routes/ShipperRoutes');

const app = express();
app.use(bodyParser.json());

// Register routes
app.use('/api/suppliers', SupplierRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/products', ProductRoutes);
app.use('/api/customers', CustomerRoutes);
app.use('/api/employees', EmployeeRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/order-details', OrderDetailRoutes);
app.use('/api/shippers', ShipperRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
