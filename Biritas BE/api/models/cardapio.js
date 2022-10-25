'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class cardapio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cardapio.hasMany(models.produtos, {
        foreignKey: 'FK_cardapio'
      })
      cardapio.hasMany(models.combo, {
        foreignKey: 'FK_cardapio'
      })
    }
  }
  cardapio.init(
    {
      descricao: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'cardapio'
    }
  )
  return cardapio
}
