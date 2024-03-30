const produtoModel = require('../models/produtoModel')

const produtoGetAll = async (req, res) => {

    const produto = await produtoModel.getProduto()

    return res.status(200).json(produto)
}

const createdProduto = async (req, res) => {
    const createdProduto = await produtoModel.createProtudo(req.body)
    return res.status(201).json(createdProduto)
}

module.exports = {
    produtoGetAll,
    createdProduto
}