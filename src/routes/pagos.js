const express = require('express')
const paSchema = require('../models/pagos')

const router = express.Router()

//listado
router.get('/pagos', (req, res) => {
    paSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//detalle pagos
router.get('/pagos/id=:id&tipo=:p', (req, res) => {
    const { id, p } = req.params

    paSchema
        .find({
            _id: id,
            nombre: p
        }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router