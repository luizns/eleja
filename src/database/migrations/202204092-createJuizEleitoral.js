"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return queryInterface.createTable("juizes_eleitorais", {
      idJuiz: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      matricula: {
        type: Sequelize.STRING({ length: 45 }),
        allowNull: false,
        unique: true,
      },
      id_usuario: {
        type: Sequelize.UUID,
        allowNull: false,
        },
    });
  },

  async down(queryInterface, Sequelize){
    return queryInterface.dropTable("juizes_eleitorais");
  },
};
