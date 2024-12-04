const { Client } = require('pg'); // Importa o módulo pg para trabalhar com PostgreSQL

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'gestao_residuos',
    password: '131415',
    port: 5432,
});

client.connect()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro de conexão', err));

// Função para adicionar uma solicitação
const addSolicitacao = async (descricao) => {
    const query = 'INSERT INTO solicitacoes (descricao) VALUES ($1) RETURNING *';
    try {
        const res = await client.query(query, [descricao]);
        return res.rows[0]; // Retorna a solicitação adicionada
    } catch (err) {
        console.error('Erro ao adicionar solicitação', err);
        throw err; // Lança o erro para ser tratado em outro lugar
    }
};

// Função para obter todas as solicitações
const getSolicitacoes = async () => {
    const query = 'SELECT * FROM solicitacoes';
    try {
        const res = await client.query(query);
        return res.rows; // Retorna todas as solicitações
    } catch (err) {
        console.error('Erro ao obter solicitações', err);
        throw err; // Lança o erro para ser tratado em outro lugar
    }
};

// Função para atualizar uma solicitação
const updateSolicitacao = async (id, descricao) => {
    const query = 'UPDATE solicitacoes SET descricao = $1 WHERE id = $2 RETURNING *';
    try {
        const res = await client.query(query, [descricao, id]);
        return res.rows[0]; // Retorna a solicitação atualizada
    } catch (err) {
        console.error('Erro ao atualizar solicitação', err);
        throw err; // Lança o erro para ser tratado em outro lugar
    }
};

// Função para deletar uma solicitação
const deleteSolicitacao = async (id) => {
    const query = 'DELETE FROM solicitacoes WHERE id = $1';
    try {
        await client.query(query, [id]); // Executa a consulta de deleção
    } catch (err) {
        console.error('Erro ao deletar solicitação', err);
        throw err; // Lança o erro para ser tratado em outro lugar
    }
};

module.exports = {
    addSolicitacao,
    getSolicitacoes,
    updateSolicitacao,
    deleteSolicitacao,
};

