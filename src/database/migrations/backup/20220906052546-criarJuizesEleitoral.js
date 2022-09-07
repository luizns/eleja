"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return queryInterface.createTable("juizes_eleitorais", {
      idjuiz: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      usuario_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:  'usuarios' ,
          key: 'idusuario'
      }},
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
    return queryInterface.dropTable("juizes_eleitorais");
  },
};
