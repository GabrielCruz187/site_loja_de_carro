// src/index.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes/routes');
require('dotenv').config(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Rota raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à API do Catálogo de Carros!');
});

// Montar as rotas
app.use('/api', routes);

// Porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

    app.use((req, res, next) => {
        console.log(`Método: ${req.method}, URL: ${req.url}, Body:`, req.body);
        next();
    });
    
});
