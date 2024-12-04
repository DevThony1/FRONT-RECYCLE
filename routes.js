const express = require('express');
const router = express.Router();
const { addSolicitacao, getSolicitacoes, updateSolicitacao, deleteSolicitacao } = require('../service');

// Criar nova solicitação
router.post('/solicitacoes', async (req, res) => {
    try {
        const { descricao } = req.body;
        const solicitacao = await addSolicitacao(descricao);
        res.status(201).json(solicitacao);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao adicionar solicitação' });
    }
});

// Obter todas as solicitações
router.get('/solicitacoes', async (req, res) => {
    try {
        const solicitacoes = await getSolicitacoes();
        res.status(200).json(solicitacoes);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter solicitações' });
    }
});

// Atualizar uma solicitação
router.put('/solicitacoes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { descricao } = req.body;
        const solicitacao = await updateSolicitacao(id, descricao);
        res.status(200).json(solicitacao);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar solicitação' });
    }
});

// Deletar uma solicitação
router.delete('/solicitacoes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteSolicitacao(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar solicitação' });
    }
});

module.exports = router;
