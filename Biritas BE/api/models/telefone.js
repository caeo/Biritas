'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class telefone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      telefone.belongsTo(models.usuario, {
        foreignKey: 'FK_usuario'
      })
      telefone.belongsTo(models.Fornecedores, {
        foreignKey: 'FK_fornecedor'
      })
      telefone.belongsTo(models.Motoboy, {
        foreignKey: 'FK_motoboy'
      })
    }
  }
  telefone.init(
    {
      numero_telefone: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'telefone'
    }
  )
  return telefone
}
