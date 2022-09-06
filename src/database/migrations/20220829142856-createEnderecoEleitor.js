"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("endereco_eleitores", {
      idEndereco: {
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
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "eleitores",
          },
          key: "idEleitor",
        },
      },
      id_zona: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "zonas",
          },
          key: "idZona",
        },
      },
    });
  },

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("endereco_eleitores");
  },
};
