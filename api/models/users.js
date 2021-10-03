const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = mongoose.model('User', new Schema({
    email: String,
    password: String,
    salt: String,
}))

module.exports = User