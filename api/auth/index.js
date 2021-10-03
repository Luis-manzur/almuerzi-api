const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next) => {
    const token = req.headres.authorization
    if (!token) {
        return res.sendStatus(403)
    }
    jwt.verify(token, 'mi-secreto', (err, decoded) => {
        const { _id } = decoded
        URLSearchParams.findOne({ _id })
            .then(user => {
                req.user = user
                next()
            })
    })
}

module.exports(isAuthenticated)