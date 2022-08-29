import Sequelize, { Model, Sequelize } from "sequelize";

export default class QuantidadeVotosCandidatosModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idquant_votos_candidato: Sequelize.INTEGER,
        hora_voto: Sequelize.DATE,
        data_voto: Sequelize.DATEONLY,
      },
      {
        sequelize,
      }
    );
  }
}
