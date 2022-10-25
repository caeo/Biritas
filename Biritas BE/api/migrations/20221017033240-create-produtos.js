'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_produto: {
        type: Sequelize.STRING
      },
      data_validade: {
        type: Sequelize.DATEONLY
      },
      qtd: {
        type: Sequelize.INTEGER
      },
      preco_produto: {
        type: Sequelize.STRING
      },
      FK_combo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'combos', key: 'id' }
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
    await queryInterface.dropTable('produtos')
  }
}
