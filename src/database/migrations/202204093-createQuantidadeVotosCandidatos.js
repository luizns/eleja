"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("quant_votos_candidatos", {
      idQuantVotosCandidato: {
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
      candidato_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "candidatos"
          },
          key: "idCandidato",
        }
      },
    });
  },

 async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("quant_votos_candidatos");
  },
};
