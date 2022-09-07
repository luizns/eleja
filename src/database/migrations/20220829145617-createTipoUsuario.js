"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("tipo_usuarios", {
      id: {
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
    return await queryInterface.dropTable("tipo_usuarios");
  },
};
