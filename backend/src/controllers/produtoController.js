const produtoModel = require('../models/produtoModel');

const produtoGetAll = async (req, res) => {
    try {
        const result = await produtoModel.getProduto();
        const total = result[0][0].total;
        return res.status(200).json({ total });
    } catch (error) {
        console.error("Erro ao obter produtos:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const valorGetAll = async (req, res) => {
    try {
        const result = await produtoModel.getValor();
        const somaTotal = result[0][0].soma_total;
        return res.status(200).json({ soma_total: somaTotal });
    } catch (error) {
        console.error("Erro ao obter valores:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const createUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const newUser = await produtoModel.createdUser({ nome, email, senha });
        return res.status(201).json({ message: "Usuário criado com sucesso!", newUser });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const createdProduto = async (req, res) => {
    try {
        const createdProduto = await produtoModel.createProtudo(req.body);
        return res.status(201).json(createdProduto);
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const logIn = async (req, res) => {
    try {
        const validacao = await produtoModel.logIn(req.body);
        return res.status(200).json({ validacao });
    } catch (error) {
        console.error("Erro ao realizar login:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const getGridItens = async (req, res) => {
    try {
        const gridItens = await produtoModel.gridItens();
        return res.status(200).json(gridItens);
    } catch (error) {
        console.error("Erro ao obter itens do grid:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const removeQuantidade = async (req, res) => {
    const { codigo, quantidade } = req.body;

    try {
        const result = await produtoModel.removeQuantidadeProduto(codigo, quantidade);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao remover quantidade do produto:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

const removeProduto = async (req, res) => {
    const { codigo } = req.body;

    try {
        const result = await produtoModel.removeProduto(codigo);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao remover produto:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

module.exports = {
    produtoGetAll,
    valorGetAll,
    createUser,
    createdProduto,
    logIn,
    getGridItens,
    removeQuantidade,
    removeProduto
}