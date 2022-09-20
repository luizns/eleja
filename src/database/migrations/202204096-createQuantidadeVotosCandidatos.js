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
      hora_voto: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      },
      data_voto: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      id_candidato_voto: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: {
            tableName: "candidatos",
          },
          key: "idCandidato",
        },
      },
      branco_nulo:{
        type:Sequelize.ENUM,
        values:['branco','nulo']
      },
   });
  },

 async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("quant_votos_candidatos");
  },
};
