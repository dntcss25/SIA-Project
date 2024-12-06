const express = require('express');
const cors = require('cors');
const app = express();

// Importing Routers
const ordersRouter = require('./routes/orders');
const orderDetailsRouter = require('./routes/orderDetails');
const suppliersRouter = require('./routes/suppliers');
const productsRouter = require('./routes/products');
const employeesRouter = require('./routes/employees');
const customersRouter = require('./routes/customers');
const categoriesRouter = require('./routes/categories');
const shippersRouter = require('./routes/shippers');

// Middleware
app.use(cors());
app.use(express.json());

// Set up Routes
app.use('/orders', ordersRouter);
app.use('/orderdetails', orderDetailsRouter);
app.use('/suppliers', suppliersRouter);
app.use('/products', productsRouter);
app.use('/employees', employeesRouter);
app.use('/customers', customersRouter);
app.use('/categories', categoriesRouter);
app.use('/shippers', shippersRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// 404 Route Not Found Handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler for unexpected errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running at http://127.0.0.1:5000');
});

module.exports = app;
