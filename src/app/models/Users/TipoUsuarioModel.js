import Sequelize, { Model } from "sequelize";

export default class TipoUsuarioModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idtipo_usuario: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
