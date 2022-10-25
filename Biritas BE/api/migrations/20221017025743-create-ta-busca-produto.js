'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TA_busca_produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo_pedido: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('TA_busca_produtos')
  }
}
