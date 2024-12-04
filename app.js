const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Sync database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Unable to sync database:', error);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

