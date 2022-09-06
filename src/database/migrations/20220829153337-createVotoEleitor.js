"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("votos", {
      idVoto: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      id_registro_voto_eleitor: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            schema: "schema",
            tableName: "registra_voto_eleitores",
          },
          key: "idRegistroVotoEleitor",
        },
      },
      id_quant_votos_candidato: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            schema: "schema",
            tableName: "quant_votos_candidatos",
          },
          key: "idQuantVotosCandidato",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("votos");
  },
};
