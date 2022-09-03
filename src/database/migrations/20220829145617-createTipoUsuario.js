"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tipo_usuario", {
      idtipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING({ length: 3 }),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tipo_usuario");
  },
};
