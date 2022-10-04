const { Router } = require('express')

const FornecedorController = require('../controllers/FornecedorController.js')

const router = Router()

router.get('/fornecedores', FornecedorController.getFornecedor)
router.get('/fornecedores/:id', FornecedorController.getFornecedorId)
router.post('/fornecedores', FornecedorController.criarFornecedor)
router.put('/fornecedores/:id', FornecedorController.atualizaFornecedor)
router.delete('/fornecedores/:id', FornecedorController.deletarFornecedor)

module.exports = router
