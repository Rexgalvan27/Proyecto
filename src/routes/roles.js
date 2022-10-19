const express = require('express')
const roSchema = require('../models/roles')

const router = express.Router()

//listado
router.get('/roles', (req, res) => {
    roSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.post('/roles', (req, res) => {
    const roles = roSchema(req.body);
    roles
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

module.exports = router