const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const customersRoutes = require('./routes/customers');
const employeesRoutes = require('./routes/employees');
const shippersRoutes = require('./routes/shippers');
const suppliersRoutes = require('./routes/suppliers');
const productsRoutes = require('./routes/products');
const orderdetailsRoutes = require('./routes/orderdetails');
const ordersRoutes = require('./routes/orders');
const categoriesRoutes = require('./routes/categories');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', customersRoutes);
app.use('/api', employeesRoutes);
app.use('/api', shippersRoutes);
app.use('/api', suppliersRoutes);
app.use('/api', productsRoutes);
app.use('/api', orderdetailsRoutes);
app.use('/api', ordersRoutes);
app.use('/api', categoriesRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
