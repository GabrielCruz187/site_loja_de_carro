// routes.js (ou o arquivo onde você configura suas rotas)
const express = require('express');
const Carro = require('../models/Carro');  // Importando o modelo Carro
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configuração do multer para armazenar as imagens no diretório "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Pasta onde as imagens serão salvas
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname); // Nome único da imagem
    cb(null, uniqueName); // Salva com o nome gerado
  }
});

const upload = multer({ storage });

// Rota para adicionar um novo carro com upload de foto
router.post('/carros', upload.single('foto'), async (req, res) => {
  try {
    const { marca, modelo, ano } = req.body;
    const foto = req.file ? `/uploads/${req.file.filename}` : ''; // Caminho da imagem

    const novoCarro = new Carro({
      marca,
      modelo,
      ano,
      foto // Salva o caminho da foto no banco
    });

    await novoCarro.save(); // Salvando o carro no banco de dados
    res.status(201).json(novoCarro); // Retorna o carro salvo com a foto
  } catch (err) {
    console.error("Erro ao salvar carro:", err);
    res.status(400).send('Erro ao adicionar carro.');
  }
});

module.exports = router;
