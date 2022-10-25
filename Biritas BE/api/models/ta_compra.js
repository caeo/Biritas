'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TA_compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TA_compra.belongsTo(models.usuario, {
        foreignKey: 'FK_usuario'
      })
      TA_compra.hasOne(models.pagamento, {
        foreignKey: 'FK_compra'
      })
    }
  }
  TA_compra.init(
    {
      preco_compra: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'TA_compra'
    }
  )
  return TA_compra
}
