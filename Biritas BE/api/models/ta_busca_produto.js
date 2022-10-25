'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TA_busca_produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TA_busca_produto.belongsTo(models.Fornecedores, {
        foreignKey: 'FK_fornecedor'
      })
      TA_busca_produto.belongsTo(models.Motoboy, {
        foreignKey: 'FK_motoboy'
      })
    }
  }
  TA_busca_produto.init(
    {
      codigo_pedido: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'TA_busca_produto'
    }
  )
  return TA_busca_produto
}
