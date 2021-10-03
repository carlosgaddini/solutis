const express = require('express')
const router = express.Router()
const database = require('../database')

router.get('/', (req, res) => {
    res.json(database)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const customer = database.find( (c) => c.id === id )

    if (customer === undefined) {
        res.status(404).send('Customer ID not found')
    }

    res.send(customer)

})

router.get('/type/:type', (req, res) => {
    const type = req.params.type

    const customer = database.filter( (c) => c.type === type )

    if (customer === undefined) {
        res.status(404).send('Customer Type not found')
    }

    res.send(customer)

})





module.exports = router