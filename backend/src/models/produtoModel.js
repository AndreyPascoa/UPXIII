const connection = require('../connection/connection');

const getProduto = async () => {
    const produto = await connection.execute('SELECT SUM(quantidade) AS total FROM produto');
    return produto;
}

const getValor = async () => {
    const valor = await connection.execute('SELECT SUM(valor) AS soma_total FROM produto');
    return valor;
}

const createdUser = async (user) => {
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
    const { nome, peso, valor, categoria, codigo, local, quantidade } = produto;

    const queryCheck = 'SELECT quantidade, valorTotal FROM produto WHERE codigo = ?';
    const [rows] = await connection.execute(queryCheck, [codigo]);

    const valorTotal = quantidade * valor;

    if (rows.length > 0) {
        const quantidadeAtual = rows[0].quantidade;
        const valorTotalAtual = rows[0].valorTotal;
        const novaQuantidade = quantidadeAtual + quantidade;
        const novoValorTotal = valorTotalAtual + valorTotal;
        const queryUpdate = 'UPDATE produto SET quantidade = ?, valorTotal = ? WHERE codigo = ?';
        await connection.execute(queryUpdate, [novaQuantidade, novoValorTotal, codigo]);
        return { message: 'Quantidade e valor total atualizados com sucesso' };
    } else {
        const queryInsert = 'INSERT INTO produto (nomeProduto, valor, categoria, local, quantidade, codigo, peso, valorTotal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const [result] = await connection.execute(queryInsert, [nome, valor, categoria, local, quantidade, codigo, peso, valorTotal]);
        return { insertId: result.insertId };
    }
}

const logIn = async (login) => {
    const { email, senha } = login;
    const query = 'SELECT COUNT(*) as validacao FROM responsavel WHERE email = ? AND senha = ?';
    const [result] = await connection.execute(query, [email, senha]);
    return result[0].validacao > 0 ? 1 : 0;
}

const gridItens = async () => {
    const [rows] = await connection.execute('SELECT nomeProduto, valor, categoria, local, quantidade, peso, codigo FROM produto');
    const numberedRows = rows.map((row, index) => ({
        id: index + 1,
        nomeProduto: row.nomeProduto,
        valor: row.valor,
        categoria: row.categoria,
        local: row.local,
        quantidade: row.quantidade,
        peso: row.peso,
        codigo: row.codigo
    }));
    return { 'GridItens': numberedRows };
}

const removeQuantidadeProduto = async (nome, codigo, quantidade) => {
    const queryCheck = 'SELECT quantidade, valor FROM produto WHERE codigo = ?';
    const [rows] = await connection.execute(queryCheck, [codigo]);

    if (rows.length > 0) {
        const quantidadeAtual = rows[0].quantidade;
        const valor = rows[0].valor;
        const novaQuantidade = quantidadeAtual - quantidade;

        if (novaQuantidade < 0) {
            throw new Error("Quantidade a remover excede a quantidade disponível.");
        }

        const novoValorTotal = novaQuantidade * valor;

        const queryUpdate = 'UPDATE produto SET quantidade = ?, valorTotal = ? WHERE codigo = ?';
        await connection.execute(queryUpdate, [novaQuantidade, novoValorTotal, codigo]);
        return { message: 'Quantidade e valor total atualizados com sucesso' };
    } else {
        throw new Error("Produto não encontrado.");
    }
}

const removeProduto = async (codigo) => {
    const queryDelete = 'DELETE FROM produto WHERE codigo = ?';
    await connection.execute(queryDelete, [codigo]);
    return { message: 'Produto removido com sucesso' };
}

module.exports = {
    getProduto,
    createProtudo,
    getValor,
    createdUser,
    logIn,
    gridItens,
    removeQuantidadeProduto,
    removeProduto
}
