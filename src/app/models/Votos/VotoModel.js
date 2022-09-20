import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

import QuantVotosCandidatosModel from "./QuantVotosCandidatosModel";

import RegistroVotoModel from "./RegistroVotoModel";

const sequelize = new Sequelize(databaseConfig);

class VotoModel extends Model {}

VotoModel.init(
  {
    idVoto: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    id_registro_voto_eleitor: {
      type: Sequelize.UUID,
      references: {
        model: RegistroVotoModel,
        key: 'idRegistroVotoEleitor',
      }
    },
    id_quant_votos_candidato: {
      type: Sequelize.UUIDV4(),
      references: {
        model: QuantVotosCandidatosModel,
        key: 'idQuantVotosCandidato',
      },
    },
  },
  {
    sequelize,
    modelName: "votos",
    timestamps: false,
    constraints: false,
  }
);

/*VotoModel.belongsTo(QuantVotosCandidatosModel, { through: QuantVotosCandidatosModel },{ 
as: "QuantidadeVotosCandidatos",
foreignKey: "id_quant_votos_candidato"});

VotoModel.belongsTo(RegistroVotoModel, { through: RegistroVotoModel },{
  as: "RegistroVotoEleitor",
  foreignKey: "id_registro_voto_eleitor"
});*/


export default VotoModel;