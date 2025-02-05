// src/models/Carro.js
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
        type: String, // URL da foto do carro
        required: false
    },
    destaque: {
        type: Boolean,
        default: false // Por padrão, o carro não será um destaque
    }
});

module.exports = mongoose.model('Carro', CarroSchema);


