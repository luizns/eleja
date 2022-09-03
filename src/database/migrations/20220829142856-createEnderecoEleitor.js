"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("endereco_eleitor", {
      idendereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      rua: {
        type: Sequelize.STRING({ length: 60 }),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING({ length: 30 }),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING({ length: 45 }),
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
      },
      id_eleitor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
      id_zona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("endereco_eleitor");
  },
};
