const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    foto: {
        type: String, // A foto pode ser uma string simples (caminho relativo)
        required: false
    },
    destaque: {
        type: Boolean,
        default: false // Por padrão, o carro não será um destaque
    }
});

module.exports = mongoose.model('Carro', CarroSchema);
