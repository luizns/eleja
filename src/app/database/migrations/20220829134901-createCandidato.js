"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("candidato", {
      idcandidato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      nome_candidato: {
        type: Sequelize.STRING({ length: 100 }),
        allowNull: false,
      },
      numero_candidato: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
      },
      id_partido: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      id_juiz_eleitoral: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      id_candidato_voto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("candidato");
  },
};
