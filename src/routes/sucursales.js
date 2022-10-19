const express = require('express')
const suSchema = require('../models/sucursales')

const router = express.Router()

//crear usuario
router.post('/sucursal', (req, res) => {
    const su = suSchema(req.body);
    su
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//listado
router.get('/sucursal', (req, res) => {
    suSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


// update
router.put("/sucursal/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, direccion, status } = req.body;
    suSchema
      .updateOne({ _id: id }, { $set: { nombre, telefono, direccion, status } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router