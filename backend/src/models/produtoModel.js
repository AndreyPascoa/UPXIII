const connection = require('./connection')

const getUser = async () => {
    const produto = await connection.execute('SELECT * FROM protudo')
    return produto
}

module.exports = {
    getUser
}