const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para o JSON de dados
app.get('/dados.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'dados.json'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚗 Altaroda - Tabela de Compatibilidade de Jantes`);
    console.log(`🌐 Servidor rodando em http://localhost:${PORT}`);
    console.log(`✅ ${new Date().toLocaleString('pt-PT')}`);
});
