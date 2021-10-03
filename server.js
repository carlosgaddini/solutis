const express = require('express')
const app = express()

app.use(express.json())

const customers = require('./routes/customers')
app.use('/customers', customers)

app.listen(3000, () => console.log('Server listen on localhost:3000'))