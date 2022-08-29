"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("quant_votos_candidato", {
      idquant_votos_candidato: {
        type: Sequelize.INTEGER,
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("quant_votos_candidat");
  },
};
