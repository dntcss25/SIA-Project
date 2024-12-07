const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./utils/database');

require('./models/associations.model');

app.use(cors());
app.use(express.json());


const SuppliersController = require('./routes/suppliers');
app.use('/Suppliers', SuppliersController);

const ShippersController = require('./routes/shippers');
app.use('/Shippers', ShippersController);

const ProductsController = require('./routes/products');
app.use('/Products', ProductsController);

const CategoriesController = require('./routes/categories');
app.use('/Categories', CategoriesController);

const OrderDetailsController = require('./routes/orderdetails');
app.use('/OrderDetails', OrderDetailsController);

const OrdersController = require('./routes/orders');
app.use('/Orders', OrdersController);

const EmployeesControllers = require('./routes/employees');
app.use('/Employees', EmployeesControllers);

const CustomersController = require('./routes/customers');
app.use('/Customers', CustomersController);


app.listen(5000, () => console.log('Server is running at http://127.0.0.1:5000'));
