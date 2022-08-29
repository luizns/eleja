import Sequelize, { Model } from "sequelize";

export default class RegistroVotoEleitorModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id_registro_voto_eleitor: Sequelize.INTEGER,
        hora_voto: Sequelize.DATE,
        data_voto: Sequelize.DATEONLY,
      },
      {
        sequelize,
      }
    );
  }
}
