const express = require('express')
const router = express.Router()
const Meal = require('../models/meals')

router.get('/', (req,res) => {
    Meal.find().then(meals => res.status(200).send(meals))
})

router.get('/:id', (req,res) => {
    Meal.findByid(req.params.id).then(meal = res.send(meal))
})

router.post('/', (req, res)  => {
    Meal.create(req.body).then(meal => res.status(201).send(meal))
})

router.put('/', (req, send) => {
    Meal.findByidAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', (req,res) => {
    Meal.findByidAndDelete(req.params.id).exec().then(()=> sendStatus(204))
})
module.exports = router