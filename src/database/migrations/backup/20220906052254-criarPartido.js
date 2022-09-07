"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("partidos", {
      idpartido: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome_partido: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      sigla: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      numero_legenda: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
    return await queryInterface.dropTable("partidos");
  },
};
