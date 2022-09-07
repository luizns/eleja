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
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_candidato: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_partido: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'partidos' ,
          key: 'idpartido'
      }},
      id_juiz_eleitoral: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'juizes_eleitorais' ,
          key: 'idjuiz'
        }},
      id_candidato_voto: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'quant_votos_candidatos' ,
          key: 'idquant_votos_candidato'
        }},
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

  async down (queryInterface, Sequelize){
    return await queryInterface.dropTable("candidatos");
  },
};
