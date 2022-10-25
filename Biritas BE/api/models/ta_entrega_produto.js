'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TA_entrega_produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TA_entrega_produto.belongsTo(models.usuario, {
        foreignKey: 'FK_usuario'
      })
      TA_entrega_produto.belongsTo(models.Motoboy, {
        foreignKey: 'FK_motoboy'
      })
    }
  }
  TA_entrega_produto.init(
    {
      codigo_compra: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'TA_entrega_produto'
    }
  )
  return TA_entrega_produto
}
