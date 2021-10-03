const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meal = mongoose.model('Meal', new Schema({
    name: String,
    description: String,
}))

module.exports = Meal