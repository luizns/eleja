"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("registra_voto_eleitores", {
      idRegistroVotoEleitor: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      dataHora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
