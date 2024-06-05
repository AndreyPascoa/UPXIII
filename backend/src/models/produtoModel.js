const connection = require('../connection/connection')

const getProduto = async () => {
    const produto = await connection.execute('SELECT COUNT(*) AS total FROM produto')
    return produto
}

const getValor = async () => {
    const valor = await connection.execute('SELECT SUM(valor) AS soma_total FROM produto')
    return valor
}

const createdUser = async (user) =>{
    const { nome, email, senha } = user;
    
    const query = 'INSERT INTO responsavel (nome, email, senha) VALUES (?, ?, ?)';

    try {
        const createdUser = await connection.execute(query, [nome, email, senha]);
        return { insertId: createdUser.insertId };
    } catch (error) {
        console.error("Erro ao inserir usuário no banco de dados:", error);
        throw error;
    }
}

const createProtudo = async (produto) => {

    const { nome, peso, valor, categoria, codigo, local, quantidade } = produto

    const query = 'INSERT INTO produto (nomeProduto, valor, categoria, local, quantidade, codigo, peso) VALUE (?, ?, ?, ?, ?, ?, ?)'

    const createdProduto = await connection.execute(query, [nome, valor, categoria, local, quantidade, codigo, peso])
    return {insertId: createdProduto.insertId}
}

const logIn = async (login) => {
    const { email, senha } = login;
    const query = 'SELECT COUNT(*) as validacao FROM responsavel WHERE email = ? AND senha = ?';
    const [result] = await connection.execute(query, [email, senha]);
    return result[0].validacao > 0 ? 1 : 0;
}

const gridItens = async () => {
    const [rows] = await connection.execute('SELECT nomeProduto, valor, categoria, local, quantidade, peso FROM produto');
    const numberedRows = rows.map((row, index) => ({
        id: index + 1,
        nomeProduto: row.nomeProduto,
        valor: row.valor,
        categoria: row.categoria,
        local: row.local,
        quantidade: row.quantidade,
        peso: row.peso
    }));
    return { 'GridItens': numberedRows };
}

module.exports = {
    getProduto,
    createProtudo,
    getValor,
    createdUser,
    logIn,
    gridItens
}