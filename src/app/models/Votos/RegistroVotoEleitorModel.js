import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import EleitorModel from "../Eleitores/EleitorModel"
const sequelize = new Sequelize(databaseConfig);
class RegistroVotoEleitorModel extends Model {}

RegistroVotoEleitorModel.init(
  {
    idRegistroVotoEleitor: {
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
    },
    id_eleitor:{
      type:Sequelize.UUID,
      allowNull:false,
      references: {
        model: EleitorModel,
        key: 'idEleitor',
      },
    }

  },
  {
    sequelize,
    modelName: "registra_voto_eleitores",
    timestamps: false,
  }
);
RegistroVotoEleitorModel.belongsTo(EleitorModel,{through:EleitorModel})
export default RegistroVotoEleitorModel;