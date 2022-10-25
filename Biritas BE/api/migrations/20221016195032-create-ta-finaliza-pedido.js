'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TA_finaliza_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtd_pedidos: {
        type: Sequelize.STRING
      },
      FK_biritas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'biritas', key: 'id' }
      },
      FK_fornecedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Fornecedores', key: 'id' }
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
    await queryInterface.dropTable('TA_finaliza_pedidos')
  }
}
