const produtoModel = require('../models/produtoModel')

const produtoGetAll = async (req, res) => {

    const result = await produtoModel.getProduto()

    const total = result[0][0].total;
    return res.status(200).json({ total: total })
}

const valorGetAll = async (req, res) => {
    const result = await produtoModel.getValor();

    const somaTotal = result[0][0].soma_total;
    return res.status(200).json({ soma_total: somaTotal });
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
    const createdProduto = await produtoModel.createProtudo(req.body)
    return res.status(201).json(createdProduto)
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

module.exports = {
    produtoGetAll,
    createdProduto,
    valorGetAll,
    createUser,
    logIn,
    getGridItens
}