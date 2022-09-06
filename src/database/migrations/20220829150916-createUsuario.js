"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("usuarios", {
      idusuario: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING({ length: 100 }),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING({ length: 60 }),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING({ length: 50 }),
        allowNull: false,
      },
      id_tipo_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("usuarios");
  },
};
