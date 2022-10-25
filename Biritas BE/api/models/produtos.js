'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produtos.belongsTo(models.cardapio, {
        foreignKey: 'FK_cardapio'
      })
      produtos.belongsTo(models.combo, {
        foreignKey: 'FK_combo'
      })
      produtos.hasMany(models.tipo_produto, {
        foreignKey: 'FK_produto'
      })
      produtos.hasMany(models.TA_vende, {
        foreignKey: 'FK_produto'
      })
    }
  }
  produtos.init(
    {
      nome_produto: DataTypes.STRING,
      data_validade: DataTypes.DATEONLY,
      qtd: DataTypes.INTEGER,
      preco_produto: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'produtos'
    }
  )
  return produtos
}
