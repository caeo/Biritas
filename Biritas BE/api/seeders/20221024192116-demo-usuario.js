'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          cpf: '123484518-51',
          nome: 'Caio',
          email: 'caeowul@sempreceub.com',
          sobrenome: 'Silva',
          data_nasc: '1997-08-14',
          cnh: '12394857628',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {})
  }
}
