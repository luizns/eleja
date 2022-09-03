"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("registro_voto_eleitor", {
      id_registro_voto_eleitor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
    return queryInterface.dropTable("registro_voto_eleitor");
  },
};
