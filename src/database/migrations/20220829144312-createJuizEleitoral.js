"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("juiz_eleitoral", {
      idjuiz: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      matricula: {
        type: Sequelize.STRING({ length: 45 }),
        allowNull: false,
        unique: true,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("juiz_eleitoral");
  },
};
