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
        type: Sequelize.STRING,
        allowNull: false,
        foreingKey: true,
      },
      id_quant_votos: {
        type: Sequelize.STRING,
        allowNull: false,
        foreingKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("votos");
  },
};
