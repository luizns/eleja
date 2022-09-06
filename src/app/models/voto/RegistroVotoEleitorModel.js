import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class RegistroVotoEleitorModel extends Model {}

RegistroVotoEleitorModel.init(
  {
    id_registro_voto_eleitor: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    hora_voto: Sequelize.DATE,
    data_voto: Sequelize.DATEONLY,
  },
  {
    sequelize,
    modelName: "registra_voto_eleitores",
    timestamps: false,
  }
);
export default RegistroVotoEleitorModel;