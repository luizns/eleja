"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("eleitores", {
      ideleitor: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
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
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: "idUsuario",
        },
      },
      id_eleitor_voto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("eleitores");
  },
};
