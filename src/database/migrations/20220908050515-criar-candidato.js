"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("candidatos", {
      id: {
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
      partido_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'partidos',
          key: 'id'
      }},
      juiz_eleitoral_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'juizes_eleitorais',
          key: 'id'
        }},
      candidato_voto_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'quant_votos_candidatos',
          key: 'id'
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
