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
    return await queryInterface.dropTable("zonas");
  },
};
