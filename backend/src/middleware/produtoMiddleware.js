const validateBody = (req, res, next) => {
    const { email, senha, nome, codigo, quantidade, valor } = req.body;
    if (req.path === '/removeQuantidade' || req.path === '/removeProduto') {
        if (!codigo) {
            return res.status(400).json({ message: 'O campo "codigo" é obrigatório' });
        }
        if (req.path === '/removeQuantidade' && !quantidade) {
            return res.status(400).json({ message: 'O campo "quantidade" é obrigatório' });
        }
    } else {
        if (req.path === '/cadastrarUser' && (!email || !senha)) {
            return res.status(400).json({ message: 'Os campos "email" e "senha" são obrigatórios' });
        }
        if (req.path === '/cadastrarProtudo' && (!nome || !codigo || !quantidade || !valor)) {
            return res.status(400).json({ message: 'Os campos "nome", "codigo", "quantidade" e "valor" são obrigatórios' });
        }
    }
    next();
}

const validateBodyLogIn = (req, res, next) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: 'Os campos "email" e "senha" são obrigatórios' });
    }
    next();
}

module.exports = {
    validateBody,
    validateBodyLogIn
}