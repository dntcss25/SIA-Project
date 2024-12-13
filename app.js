// Initialize express app, connect to database, and start server
const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database');

const app = express();

app.use(cors());
app.use(express.json());

// Require Routes
const categoryRoutes = require('./routes/categories');
const customerRoutes = require('./routes/customers');
const employeeRoutes = require('./routes/employees');
const orderDetailRoutes = require('./routes/orderDetails');
const orderRoutes = require('./routes/orders');
const productRoutes = require('./routes/products');
const shipperRoutes = require('./routes/shippers');
const supplierRoutes = require('./routes/suppliers');

// Use Routes
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

// Syncing the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Unable to sync database:', error);
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});