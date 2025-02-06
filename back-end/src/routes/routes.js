
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
        console.log("Dados recebidos:", req.body); // Log dos dados recebidos

        


        const novoCarro = new Carro(req.body);
        await novoCarro.save(); // Tentando salvar no banco
        console.log("Carro salvo com sucesso:", novoCarro); // Log após salvar
        res.status(201).json(novoCarro);
    } catch (err) {
        console.error("Erro ao salvar carro:", err); // Log de erro
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

// Rota para atualizar o status de destaque do carro
router.put('/carros/:id/destaque', async (req, res) => {
    try {
        const { destaque } = req.body;
        const carroAtualizado = await Carro.findByIdAndUpdate(
            req.params.id,
            { destaque },
            { new: true }
        );

        if (!carroAtualizado) {
            return res.status(404).send({ error: 'Carro não encontrado.' });
        }

        res.status(200).send(carroAtualizado);
    } catch (error) {
        res.status(400).send({ error: 'Erro ao atualizar destaque do carro.' });
    }   
}); // <-- Aqui estava o erro! Essa chave estava faltando.

module.exports = router;