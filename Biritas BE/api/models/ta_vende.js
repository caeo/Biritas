'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TA_vende extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TA_vende.belongsTo(models.Fornecedores, {
        foreignKey: 'FK_fornecedor'
      })
      TA_vende.belongsTo(models.cardapio, {
        foreignKey: 'FK_cardapio'
      })
    }
  }
  TA_vende.init(
    {
      preco_venda: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'TA_vende'
    }
  )
  return TA_vende
}
