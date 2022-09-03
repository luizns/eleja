"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("partido", {
      idpartido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_partido: {
        type: Sequelize.STRING({ length: 100 }),
        allowNull: false,
        unique: true,
      },
      sigla: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
        unique: true,
      },
      numero_legenda: {
        type: Sequelize.STRING({ length: 2 }),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("partido");
  },
};
