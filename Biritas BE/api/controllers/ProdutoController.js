const database = require('../models')

class ProdutoController {
  static async getProduto(req, res) {
    try {
      const todosOsProdutos = await database.produtos.findAll()
      return res.status(200).json(todosOsProdutos)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getProdutoId(req, res) {
    const { id } = req.params
    try {
      const umProduto = await database.produtos.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umProduto)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarProduto(req, res) {
    const novoProduto = req.body
    try {
      const novoProdutoCriado = await database.produtos.create(novoProduto)
      return res.status(200).json(novoProdutoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaProduto(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.Produtos.update(novasInfos, { where: { id: Number(id) } })
      const ProdutoAtualizado = await database.produtos.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json({ message: `Produto atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarProduto(req, res) {
    const { id } = req.params
    try {
      await database.produtos.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ProdutoController
