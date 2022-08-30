"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("candidatos", {
      idcandidato: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome_candidato: {
        type: Sequelize.STRING({ length: 100 }),
        allowNull: false,
      },
      numero_candidato: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
      },
      id_partido: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_juiz_eleitoral: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_candidato_voto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize){
    return await queryInterface.dropTable("candidatos");
  },
};
