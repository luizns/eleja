"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("eleitores", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      titulo_eleitor: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      usuario_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        references: {
          model:  'usuarios' ,
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    return await queryInterface.dropTable("eleitores");
  },
};
