const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        //Looks for provided header
        const token = req.header('Authorization').replace('Bearer ', '')
        //Validates the header provided
        const decoded = jwt.verify(token, 'secretkey')
        //Finds the user associated with the validated header
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth

