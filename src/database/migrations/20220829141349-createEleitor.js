"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("eleitor", {
      ideleitor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.STRING({ length: 11 }),
        allowNull: false,
        unique: true,
      },
      titulo_eleitor: {
        type: Sequelize.STRING({ length: 12 }),
        allowNull: false,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
        unique: true,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      id_eleitor_voto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("eleitor");
  },
};
