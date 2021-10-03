const express = require('express')
const crypto = require('crypto')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/users')


router.post('/register', (req, res)  => {
    const { email, password} = req.body 
    crypto.randomBytes(16, (err, salt) => {
        const newSalt = salt.toString('base64')
        crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) =>{
            const encryptedPassword = key.toString('base64')
            Users.findOne({email})
                .then(user => {
                    if (user) {
                        return re.send('Email already created.')
                    }
                    Users.create({
                        email,
                        password: encryptedPassword,
                        salt: newSalt
                    }).then(() => {
                        res.send('User created successfully')
                    })
                })
        })
    })
})

router.post('/login', (req, res)  => {
    const { email, password} = req.body
    User.findOne({email}).then(user =>{
        if (!user) {
            return res.send('Email or password is invalid.')
        }
        crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) =>{
            const encryptedPassword = key.toString('base64')
            if (user.password === encryptedPassword) {
                const token = signToken(user._id)
                return res.send({token})
            }
            res.semd('Email or password is invalid.')
        })
    })
})

const signToken = (_id) => {
    return jwt.sign({_id}, 'mi-secreto'), {
        expiresIn: 60 * 60 * 24 * 360
    }
}

module.exports = router