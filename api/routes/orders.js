const express = require('express')
const router = express.Router()
const Order = require('../models/orders')
const isAuthenticated = require('../auth/index')

router.get('/', (req,res) => {
    Order.find.exec().then(orders => res.status(200).send(orders))
})

router.get('/:id', (req,res) => {
    Order.findByid(req.params.id).exec().then(order = res.send(order))
})

router.post('/', isAuthenticated, (req, res)  => {
    const {_id} = req.user
    Order.create(...req.body, user_id: _id).then(order => res.status(201).send(order))
})

router.put('/', isAuthenticated, (req, send) => {
    Order.findByidAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req,res) => {
    Order.findByidAndDelete(req.params.id).then(() => sendStatus(204))
})

module.exports = router