"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("tipo_usuarios", {
      idTipo: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

 async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("tipo_usuarios");
  },
};
