import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class JuizEleitoralModel extends Model {}

JuizEleitoralModel.init(
  {
    idJuiz: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    matricula: Sequelize.STRING,
    id_usuario: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "juizes_eleitorais",
    timestamps: false,
  }
);
export default JuizEleitoralModel;