const database = require('../models')

class FornecedorController {
  static async getFornecedor(req, res) {
    try {
      const todosOsFornecedores = await database.Fornecedores.findAll()
      return res.status(200).json(todosOsFornecedores)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getFornecedorId(req, res) {
    const { id } = req.params
    try {
      const umFornecedor = await database.Fornecedores.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umFornecedor)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarFornecedor(req, res) {
    const novoFornecedor = req.body
    try {
      const novoFornecedorCriado = await database.Fornecedores.create(
        novoFornecedor
      )
      return res.status(200).json(novoFornecedorCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaFornecedor(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.Fornecedores.update(novasInfos, { where: { id: Number(id) } })
      const fornecedorAtualizado = await database.Fornecedores.findOne({
        where: { id: Number(id) }
      })
      return res
        .status(200)
        .json({ message: `fornecedor atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarFornecedor(req, res) {
    const { id } = req.params
    try {
      await database.Fornecedores.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = FornecedorController
