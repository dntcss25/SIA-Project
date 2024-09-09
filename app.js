const express = require('express')
const app = express()
const cors = require('cors')
//const pg = require('pg')
app.use(cors())
app.use(express.json())

const UserRouter = require('./routes/users');
app.use('/users', UserRouter)


app.listen(5000, () => console.log('server is running at 127.0.0.1:5000'))