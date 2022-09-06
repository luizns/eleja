import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import QuantidadeVotosCandidatosModel from "./QuantidadeVotosCandidatosModel"
import RegistroVotoEleitorModel from "./RegistroVotoEleitorModel"
const sequelize = new Sequelize(databaseConfig);
class VotoModel extends Model {}

VotoModel.init(
  {
    idVoto: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    id_quant_votos_candidato:{ 
      type:Sequelize.UUID,
      references: {
        model: QuantidadeVotosCandidatosModel,
        key: 'idQuantVotosCandidato',
      },
    },
    id_registro_voto_eleitor: {
      type:Sequelize.UUID,
      references: {
        model: RegistroVotoEleitorModel,
        key: 'idRegistroVotoEleitor',
      },
    },
    },
  {
    sequelize,
    modelName: "votos",
    timestamps: false,
  }
);
VotoModel.belongsToMany(QuantidadeVotosCandidatosModel,{through:QuantidadeVotosCandidatosModel,as:'idQuantVotosCandidato'})
VotoModel.belongsToMany(RegistroVotoEleitorModel,{through:RegistroVotoEleitorModel,as:'idRegistroVotoEleitor'})
export default VotoModel;