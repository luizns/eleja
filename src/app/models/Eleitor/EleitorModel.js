import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class EleitorModel extends Model {}

EleitorModel.init(
  {
    ideleitor: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    cpf: Sequelize.STRING,
    titulo_eleitor: Sequelize.STRING,
    rg: Sequelize.STRING,
    id_usuario: Sequelize.INTEGER,
    id_eleitor_voto: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName: "eleitores",
    timestamps: false,
  }
);

export default EleitorModel;
