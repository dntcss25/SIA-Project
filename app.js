const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const CategoryRouter = require('./routes/category');  
app.use('/category', CategoryRouter);  
const SupplierRouter = require('./routes/supplier'); 
app.use('/supplier', SupplierRouter);  

const ProductsRouter = require('./routes/products'); 
app.use('/products', ProductsRouter);  

const OrderDetailsRouter = require('./routes/orderdetails');
app.use('/orderdetails', OrderDetailsRouter);

const OrdersRouter = require('./routes/orders');
app.use('/orders', OrdersRouter);

const EmployeesRouter = require('./routes/employees');
app.use('/employees', EmployeesRouter);

const CustomersRouter = require('./routes/customers');
app.use('/customers', CustomersRouter);

const ShippersRouter = require('./routes/shippers');
app.use('/shippers', ShippersRouter);

app.listen(5000, () => console.log('server is running at 127.0.0.1:5000'))
