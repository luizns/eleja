"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuario", {
      idusuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING({ length: 100 }),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING({ length: 60 }),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING({ length: 50 }),
        allowNull: false,
      },
      id_tipo_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuario");
  },
};
