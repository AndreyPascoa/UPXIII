const express = require('express')
const produtoControler = require('./controllers/produtoController')

const router = express.Router()
const produtoMiddleware = require('./middleware/produtoMiddleware')

router.get('/teste', produtoControler.produtoGetAll)
router.post('/teste', produtoMiddleware.validateBody, produtoControler.createdProduto)

module.exports = router