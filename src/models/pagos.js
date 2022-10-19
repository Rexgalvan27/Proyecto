const mongoose = require('mongoose')
var cod = Math.floor(Math.random() * 999)



const pagos = mongoose.Schema({
    nombre: {
        type: String
    },
    codigo: {
        type: Number,
        default: cod
    },
    timesptamp: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('pagos', pagos)