"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("registra_voto_eleitores", {
      idRegistroVotoEleitor: {
        type: Sequelize.STRING({length:100}),
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      data_voto: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: Sequelize.literal('NULL')
      },
      hora_voto: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: Sequelize.literal('NULL')
      },
      id_eleitor: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "eleitores"
          },
          key: "idEleitor",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("registro_voto_eleitores");
  },
};
