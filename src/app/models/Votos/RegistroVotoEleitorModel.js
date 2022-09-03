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
    hora_voto: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.fn('now') 
    },
    data_voto:{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.fn('now') 
    }
  },
  {
    sequelize,
    modelName: "registra_voto_eleitores",
    timestamps: false,
  }
);
export default RegistroVotoEleitorModel;