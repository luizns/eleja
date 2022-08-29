import Sequelize, { Model } from "sequelize";

export default class PartidoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idpartido: Sequelize.INTEGER,
        nome_partido: Sequelize.STRING,
        sigla: Sequelize.STRING,
        numero_legenda: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
