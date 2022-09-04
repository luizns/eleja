"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuarios", {
      idusuario: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_tipo_usuario: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "tipo_usuarios",
          },
          key: "idTipo",
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuarios");
  },
};
