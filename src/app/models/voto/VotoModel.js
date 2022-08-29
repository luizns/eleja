import Sequelize, { Model } from "sequelize";

export default class VotoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idvoto: Sequelize.INTEGER,
        id_reg_voto_eleitor: Sequelize.INTEGER,
        id_quant_votos: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
