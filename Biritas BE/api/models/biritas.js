'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class biritas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      biritas.hasMany(models.pagamento, {
        foreignKey: 'FK_biritas'
      })
      biritas.hasMany(models.TA_finaliza_pedido, {
        foreignKey: 'FK_biritas'
      })
    }
  }
  biritas.init(
    {
      nome_responsavel: DataTypes.STRING,
      cnpj: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'biritas'
    }
  )
  return biritas
}
