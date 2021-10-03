const express = require('express')

const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

app.get('/health', (req, res) => {
const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
}

res.status(200).send(data);
});

const customers = require('./routes/customers')
app.use('/customers', customers)

app.listen(3000, () => console.log('Server listen on localhost:3000'))