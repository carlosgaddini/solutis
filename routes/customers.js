const express = require('express')
const router = express.Router()
const database = require('../database')

router.get('/', (req, res) => {
    res.status(200).json(database)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (id === undefined || id === NaN || id === '') {
        res.status(400).send('Customer ID Invalid')
    }

    const customer = database.find( (c) => c.id === id )

    if (customer === undefined) {
        res.status(404).send('Customer ID Not Found')
    }

    res.send(customer)

})

router.get('/person/:type', (req, res) => {
    const { type } = req.params

    if (type !== 'F' && type !== 'J') {
        res.status(400).send('Customer Type Invalid')
    }

    const customer = database.filter( (c) => c.person === type )

    if (customer === undefined) {
        res.status(404).send('Customer Person Type Not Found')
    }

    res.send(customer)

})





module.exports = router