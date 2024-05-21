const connection = require('../connection/connection')

const getProduto = async () => {
    const produto = await connection.execute('SELECT COUNT(*) FROM produto')
    return produto
}

const getValor = async () => {
    const valor = await connection.execute('SELECT SUM(valor) AS soma_total FROM produto')
}

const createdUser = async (user) =>{
    const {nome, email, senha} = user
    
    const query = 'INSERT INTO responsavel (nome, email, senha) VALUE (?, ?, ?)'
    const createdUser = await connection.execute(query, [nome, email, senha])
    return {insertId: createdUser.insertId}
}

const createProtudo = async (produto) => {

    const { nome } = produto

    const query = 'INSERT INTO produto (nomeProduto, valor, categoria, local, quantidade, codigo, peso) VALUE (?, ?, ?, ?, ?, ?, ?)'

    const createdProduto = await connection.execute(query, [nome, 1, 1, 1, 1, 1, 1])
    return {insertId: createdProduto.insertId}
}

module.exports = {
    getProduto,
    createProtudo,
    getValor,
    createdUser
}