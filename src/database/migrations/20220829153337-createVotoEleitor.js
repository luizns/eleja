"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("voto", {
      idvoto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_reg_voto_eleitor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
      id_quant_votos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("voto");
  },
};
