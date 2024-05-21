const express = require('express')
const produtoControler = require('./controllers/produtoController')

const router = express.Router()
const produtoMiddleware = require('./middleware/produtoMiddleware')

router.get('/quantidade', produtoControler.produtoGetAll)
router.get('/preco', produtoControler.valorGetAll)
router.post('/cadastrarUser', produtoMiddleware.validateBody, produtoControler.createdUser)
router.post('/teste', produtoMiddleware.validateBody, produtoControler.createdProduto)

module.exports = router