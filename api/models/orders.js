const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = mongoose.model('Order', new Schema({
    meal: {type: Schema.Types.ObjectId, ref: 'Meal'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}

}))

module.exports = Order