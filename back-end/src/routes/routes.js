// src/routes/routes.js
const express = require('express');
const Carro = require('../models/Carro');
const router = express.Router();

// Rota para listar todos os carros
router.get('/carros', async (req, res) => {
    try {
        const carros = await Carro.find();
        res.json(carros);
    } catch (err) {
        res.status(500).send('Erro ao buscar carros.');
    }
});

// Rota para adicionar um novo carro
router.post('/carros', async (req, res) => {
    try {
        const novoCarro = new Carro(req.body);
        await novoCarro.save();
        res.status(201).json(novoCarro);
    } catch (err) {
        res.status(400).send('Erro ao adicionar carro.');
    }
});

// Rota para atualizar um carro existente
router.put('/carros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const carroAtualizado = await Carro.findByIdAndUpdate(id, req.body, { new: true });
        res.json(carroAtualizado);
    } catch (err) {
        res.status(400).send('Erro ao atualizar carro.');
    }
});

// Rota para deletar um carro
router.delete('/carros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Carro.findByIdAndDelete(id);
        res.send('Carro removido com sucesso.');
    } catch (err) {
        res.status(400).send('Erro ao remover carro.');
    }
});

module.exports = router;

