'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('telefones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_telefone: {
        type: Sequelize.STRING
      },
      FK_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' }
      },
      FK_fornecedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Fornecedores', key: 'id' }
      },
      FK_motoboy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Motoboys', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telefones')
  }
}
