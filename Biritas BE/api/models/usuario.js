'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuario.hasMany(models.TA_compra, {
        foreignKey: 'FK_usuario'
      })
      usuario.hasOne(models.endereco, {
        foreignKey: 'FK_usuario'
      })
      usuario.hasOne(models.telefone, {
        foreignKey: 'FK_usuario'
      })
      usuario.hasMany(models.TA_entrega_produto, {
        foreignKey: 'FK_usuario'
      })
    }
  }
  usuario.init(
    {
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      data_nasc: DataTypes.DATEONLY,
      cnh: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'usuario'
    }
  )
  return usuario
}
