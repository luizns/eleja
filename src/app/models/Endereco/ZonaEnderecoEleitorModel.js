import Sequelize, { Model } from "sequelize";

export default class ZonaEnderecoEleitor extends Model {
  static init(sequelize) {
    super.init(
      {
        idzona: Sequelize.INTEGER,
        secao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
