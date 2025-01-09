const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    ano: { type: Number, required: true },
    preco: { type: Number, required: true },
    descricao: String,
    imagem: String, // URL para a imagem
});

module.exports = mongoose.model('Carro', CarroSchema);
