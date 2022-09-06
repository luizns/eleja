"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return queryInterface.createTable("juiz_eleitoral", {
      idjuiz: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      matricula: {
        type: Sequelize.STRING({ length: 45 }),
        allowNull: false,
        unique: true,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize){
    return queryInterface.dropTable("juiz_eleitoral");
  },
};
