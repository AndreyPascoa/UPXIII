const express = require('express');
const produtoControler = require('./controllers/produtoController');
const produtoMiddleware = require('./middleware/produtoMiddleware');

const router = express.Router();

router.get('/quantidade', produtoControler.produtoGetAll);
router.get('/preco', produtoControler.valorGetAll);
router.get('/gridItens', produtoControler.getGridItens);

router.post('/cadastrarUser', produtoMiddleware.validateBody, produtoControler.createUser);
router.post('/cadastrarProtudo', produtoMiddleware.validateBody, produtoControler.createdProduto);
router.post('/login', produtoMiddleware.validateBody, produtoControler.logIn);
router.post('/removeQuantidade', produtoMiddleware.validateBody, produtoControler.removeQuantidade);
router.post('/removeProduto', produtoMiddleware.validateBody, produtoControler.removeProduto);

module.exports = router;
