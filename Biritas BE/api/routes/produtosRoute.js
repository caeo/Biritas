const { Router } = require('express')

const ProdutoController = require('../controllers/ProdutoController.js')

const router = Router()

router.get('/produtos', ProdutoController.getProduto)
router.get('/produtos/:id', ProdutoController.getProdutoId)
router.post('/produtos', ProdutoController.criarProduto)
router.put('/produtos/:id', ProdutoController.atualizaProduto)
router.delete('/produtos/:id', ProdutoController.deletarProduto)

module.exports = router
