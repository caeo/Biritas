'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fornecedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fornecedores.hasMany(models.TA_vende, {
        foreignKey: 'FK_fornecedor'
      })
      Fornecedores.hasMany(models.TA_finaliza_pedido)
      Fornecedores.hasOne(models.endereco, {
        foreignKey: 'FK_fornecedor'
      })
      Fornecedores.hasMany(models.telefone, {
        foreignKey: 'FK_fornecedor'
      })
      Fornecedores.hasMany(models.TA_busca_produto, {
        foreignKey: 'FK_fornecedor'
      })
    }
  }
  Fornecedores.init(
    {
      nome: DataTypes.STRING,
      nome_dono: DataTypes.STRING,
      cnpj: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Fornecedores'
    }
  )
  return Fornecedores
}
