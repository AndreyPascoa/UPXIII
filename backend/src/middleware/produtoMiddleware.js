const validateBody = (req, res, next) => {
    const { body } = req
    if(body.nome == undefined) {
        res.status(400).json({message:'The field "title" is required'})
    }

    if(body.nome == null ) {
        res.status(400).json({message:'Title cannot be empty'})
    }

    next()
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