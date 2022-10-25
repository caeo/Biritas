'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TA_finaliza_pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TA_finaliza_pedido.belongsTo(models.biritas, {
        foreignKey: 'FK_biritas'
      })
      TA_finaliza_pedido.belongsTo(models.Fornecedores, {
        foreignKey: 'FK_fornecedor'
      })
    }
  }
  TA_finaliza_pedido.init(
    {
      qtd_pedidos: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'TA_finaliza_pedido'
    }
  )
  return TA_finaliza_pedido
}
