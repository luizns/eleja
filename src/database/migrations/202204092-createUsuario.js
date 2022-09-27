"use strict";

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable("usuarios", {
      idUsuario: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token_sessao:{
        type:Sequelize.STRING,
        allowNull:true,
        unique:false,
      },
      id_tipo_usuario: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "tipo_usuarios",
          },
          key: "idTipo",
        },
      },
    });
  },

 async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("usuarios");
  },
};
