import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class JuizEleitoralModel extends Model {}

JuizEleitoralModel.init(
  {
    idjuiz: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    matricula: Sequelize.STRING,
    id_usuario: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName: "juizes",
    timestamps: false,
  }
);
export default JuizEleitoralModel;