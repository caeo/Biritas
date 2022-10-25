'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class combo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      combo.belongsTo(models.cardapio, {
        foreignKey: 'FK_cardapio'
      })
      combo.hasMany(models.produtos, {
        foreignKey: 'FK_combo'
      })
    }
  }
  combo.init(
    {
      descr_combo: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'combo'
    }
  )
  return combo
}
