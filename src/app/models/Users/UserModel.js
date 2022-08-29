import Sequelize, { Model } from "sequelize";

export default class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.UUIDV4(),
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        id_tipo_usuario: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}