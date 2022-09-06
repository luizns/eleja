"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("registro_voto_eleitores", {
      id_registro_voto_eleitor: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      hora_voto: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_voto: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("registro_voto_eleitores");
  },
};
