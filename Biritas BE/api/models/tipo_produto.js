'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tipo_produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tipo_produto.belongsTo(models.produtos, {
        foreignKey: 'FK_tipo_produto'
      })
    }
  }
  tipo_produto.init(
    {
      categoria: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'tipo_produto'
    }
  )
  return tipo_produto
}
