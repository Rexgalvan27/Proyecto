const express = require('express')
const userSchema = require('../models/usuarios')

const router = express.Router()


//Create a user
router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//Print list
router.get('/usuarios', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Searh user
router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


//Delete user
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// update a user
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { correo, contraseña, nombre, edad, rol, sucursal } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { correo, contraseña, nombre, edad, rol, sucursal } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router