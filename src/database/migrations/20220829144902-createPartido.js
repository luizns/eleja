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
        type: Sequelize.STRING({ length: 100 }),
        allowNull: false,
        unique: true,
      },
      sigla: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
        unique: true,
      },
      numero_legenda: {
        type: Sequelize.STRING({ length: 2 }),
        allowNull: false,
        unique: true,
      },
    });
  },

 async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("partidos");
  },
};
