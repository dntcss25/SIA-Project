<<<<<<< HEAD
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
=======
const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database');

const app = express();

app.use(cors());
app.use(express.json());

const categoryRoutes = require('./routes/category.routes');
const customerRoutes = require('./routes/customer.routes');
const employeeRoutes = require('./routes/employee.routes');
const orderDetailRoutes = require('./routes/order-detail.routes');
const orderRoutes = require('./routes/order.routes');
const productRoutes = require('./routes/product.routes');
const shipperRoutes = require('./routes/shipper.routes');
const supplierRoutes = require('./routes/supplier.routes');

app.use('/categories', categoryRoutes);
app.use('/customers', customerRoutes);
app.use('/employees', employeeRoutes);
app.use('/order-details', orderDetailRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/shippers', shipperRoutes);
app.use('/suppliers', supplierRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Unable to sync database:', error);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

>>>>>>> 1917df1 (My Project-SIRON)
