'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pagamento.belongsTo(models.biritas, {
        foreignKey: 'FK_biritas'
      })
    }
  }
  pagamento.init(
    {
      valor_pago: DataTypes.STRING,
      tipo_pagamento: DataTypes.STRING,
      numero_conta: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'pagamento'
    }
  )
  return pagamento
}
