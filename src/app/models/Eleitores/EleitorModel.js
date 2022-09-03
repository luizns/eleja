import Sequelize, { Model, Sequelize } from "sequelize";

export default class EleitorModel extends Model {
  static init(sequelize) {
    super.init(
      {
        ideleitor: Sequelize.INTEGER,
        cpf: Sequelize.STRING,
        titulo_eleitor: Sequelize.STRING,
        rg: Sequelize.STRING,
        id_usuario: Sequelize.INTEGER,
        id_eleitor_voto: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
