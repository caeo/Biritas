'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      endereco.belongsTo(models.usuario, {
        foreignKey: 'FK_usuario'
      })
      endereco.belongsTo(models.Fornecedores, {
        foreignKey: 'FK_fornecedor'
      })
    }
  }
  endereco.init(
    {
      cep: DataTypes.STRING,
      complemento: DataTypes.STRING,
      referencia: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'endereco'
    }
  )
  return endereco
}
