"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("quant_votos_candidatos", {
      idquant_votos_candidato: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      hora_voto: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      data_voto: {
        type: Sequelize.DATEONLY,
        allowNull: false, 
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'update_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

 async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("quant_votos_candidatos");
  },
};
