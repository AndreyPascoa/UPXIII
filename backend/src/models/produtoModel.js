const connection = require('../connection/connection')

const getProduto = async () => {
    const produto = await connection.execute('SELECT * FROM produto')
    return produto
}

const createProtudo = async (produto) => {

    const { nome } = produto

    const query = 'INSERT INTO produto (nomeProduto, valor, categoria, local, quantidade, codigo, peso) VALUE (?, ?, ?, ?, ?, ?, ?)'

    const createdProduto = await connection.execute(query, [nome, 1, 1, 1, 1, 1, 1])
    return {insertId: createdProduto.insertId}
}

module.exports = {
    getProduto,
    createProtudo
}