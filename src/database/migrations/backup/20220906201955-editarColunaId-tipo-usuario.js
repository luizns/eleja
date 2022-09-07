"use strict";

module.exports = {
 async up(queryInterface, Sequelize){
    return await queryInterface.changeColumn("usuarios", "id_tipo_usuario", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model:  'tipo_usuarios' ,
        key: 'idtipo'
      }
    });
  },

  async down(queryInterface, Sequelize){
    return await queryInterface.dropTable("usuarios");
  },
};
