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
      numeroCandidato: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contagemDeVotos: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
    });
  },

 async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("quant_votos_candidatos");
  },
};
