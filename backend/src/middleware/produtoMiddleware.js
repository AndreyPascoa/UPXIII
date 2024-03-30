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

module.exports = {
    validateBody
}