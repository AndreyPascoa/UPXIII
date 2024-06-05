const express = require('express')
const produtoControler = require('./controllers/produtoController')

const router = express.Router()
const produtoMiddleware = require('./middleware/produtoMiddleware')

router.get('/quantidade', produtoControler.produtoGetAll)
router.get('/preco', produtoControler.valorGetAll)
router.get('/gridItens', produtoControler.getGridItens)

router.post('/cadastrarUser', produtoMiddleware.validateBody, produtoControler.createUser)
router.post('/cadastrarProtudo', produtoMiddleware.validateBody, produtoControler.createdProduto)
router.post('/login', produtoMiddleware.validateBodyLogIn, produtoControler.logIn)

module.exports = router