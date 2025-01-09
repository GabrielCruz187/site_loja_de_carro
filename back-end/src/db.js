const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/catalogo_carros', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1); // Finaliza o processo em caso de erro
    }
};

module.exports = connectDB;
