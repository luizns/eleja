"use strict";

module.exports = {
  async up (queryInterface, Sequelize){
    return await queryInterface.createTable("votos", {
      idvoto: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      id_reg_voto_eleitor: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'registra_voto_eleitores' ,
          key: 'id_registro_voto_eleitor'
        }},
      id_quant_votos: {
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

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("votos");
  },
};
