import Sequelize, { Model } from "Sequelize";

export default class JuizEleitoralModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idjuiz: Sequelize.INTEGER,
        matricula: Sequelize.STRING,
        id_usuario: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
