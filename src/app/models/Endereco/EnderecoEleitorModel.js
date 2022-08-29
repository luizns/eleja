import Sequelize, { Model } from "sequelize";

export default class EnderecoEleitorModel extends Model {
  static init(sequelize) {
    super.init(
      {
        idendereco: Sequelize.INTEGER,
        rua: Sequelize.STRING,
        bairro: Sequelize.STRING,
        numero: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
        id_eleitor: Sequelize.INTEGER,
        id_zona: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
