const express = require('express')
const produtoControler = require('./controllers/produtoController')

const router = express.Router()

router.get('/teste', produtoControler.produtoGetAll)

module.exports = router