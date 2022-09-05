"use strict";

module.exports = {
  async up(queryInterface, Sequelize){
    return await queryInterface.createTable("zonas", {
      idzona: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      secao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("zonas");
  },
};
