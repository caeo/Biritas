'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TA_vendes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preco_venda: {
        type: Sequelize.STRING
      },
      qtd_venda: {
        type: Sequelize.INTEGER
      },
      FK_fornecedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Fornecedores', key: 'id' }
      },
      FK_cardapio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'cardapios', key: 'id' }
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
    await queryInterface.dropTable('TA_vendes')
  }
}
