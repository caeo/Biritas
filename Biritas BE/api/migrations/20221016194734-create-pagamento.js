'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pagamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor_pago: {
        type: Sequelize.STRING
      },
      tipo_pagamento: {
        type: Sequelize.STRING
      },
      numero_conta: {
        type: Sequelize.STRING
      },
      FK_biritas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'biritas', key: 'id' }
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
    await queryInterface.dropTable('pagamentos')
  }
}
