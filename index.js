const express = require('express');
const app = express();
const routes = require('./routes/routes'); // Importa o arquivo de rotas

app.use(express.json()); // Middleware para processar JSON nas requisições
app.use('/api', routes); // Usa as rotas de routes.js no caminho base /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack); // Log do erro no console
    res.status(500).json({ error: 'Algo deu errado!' }); // Resposta ao cliente
});

// Middleware de Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`); // Log da requisição
    next(); // Chama o próximo middleware
});
