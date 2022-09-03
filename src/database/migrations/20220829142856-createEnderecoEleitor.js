"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("endereco_eleitores", {
      idendereco: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      rua: {
        type: Sequelize.STRING({ length: 60 }),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING({ length: 30 }),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING({ length: 45 }),
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
      },
      id_eleitor: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      id_zona: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
    });
  },

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("endereco_eleitores");
  },
};
