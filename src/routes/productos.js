const express = require('express')
const prodSchema = require('../models/productos')

const router = express.Router()

//agregar producto
router.post('/productos', (req, res) => {
    const prod = prodSchema(req.body);
    prod
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//listado
router.get('/productos', (req, res) => {
    prodSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//buscar producto
router.get('/productos/:sku', (req, res) => {
    const { sku } = req.params

    prodSchema
        .find({
            sku
        }).then((data) => res.json(data))
        .catch((error) => res.send("Encontrado"))
})

//borrar producto
router.delete('/productos/:id', (req, res) => {
    const { id} = req.params

    prodSchema
        .remove({
            id
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// update
router.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { nombre, sku, stock, sucursal, precio, status } = req.body;

    prodSchema
      .updateOne({ _id: id }, { $set: { nombre, sku, stock, sucursal, precio, status } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router