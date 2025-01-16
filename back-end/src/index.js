const express = require('express');
const mongoose = require('mongoose');
const Carro = require('./db'); // Importa o modelo Carro

const app = express();

app.use(express.json()); // Middleware para permitir JSON no body das requisições

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/catalogo_carros', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

// Rotas
// 1. Rota para listar todos os carros
app.get('/carros', async (req, res) => {
    try {
        const carros = await Carro.find();
        res.json(carros);
    } catch (err) {
        res.status(500).send('Erro ao buscar carros.');
    }
});

// 2. Rota para adicionar um novo carro
app.post('/carros', async (req, res) => {
    try {
        const novoCarro = new Carro(req.body);
        await novoCarro.save();
        res.status(201).json(novoCarro);
    } catch (err) {
        res.status(400).send('Erro ao adicionar carro.');
    }
});

// 3. Rota para atualizar um carro existente
app.put('/carros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const carroAtualizado = await Carro.findByIdAndUpdate(id, req.body, { new: true });
        res.json(carroAtualizado);
    } catch (err) {
        res.status(400).send('Erro ao atualizar carro.');
    }
});

// 4. Rota para deletar um carro
app.delete('/carros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Carro.findByIdAndDelete(id);
        res.send('Carro removido com sucesso.');
    } catch (err) {
        res.status(400).send('Erro ao remover carro.');
    }
});

// Inicializar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
