import Sequelize, { Model } from "sequelize";

export default class CandidatoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idcandidato: Sequelize.INTEGER,
        nome_candidato: Sequelize.STRING,
        numero_candidato: Sequelize.STRING,
        id_partido: Sequelize.INTEGER,
        id_juiz_eleitoral: Sequelize.INTEGER,
        id_candidato_voto: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
