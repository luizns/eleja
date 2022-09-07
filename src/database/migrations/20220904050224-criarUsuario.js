"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
      tipo_usuario_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model:  'tipo_usuarios', key: 'id' },
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
    return await queryInterface.dropTable("usuarios");
  },
};
