import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import QuantidadeVotosCandidatosModel from "./QuantidadeVotosCandidatosModel"
import RegistroVotoEleitorModel from "./RegistroVotoEleitorModel"

const sequelize = new Sequelize(databaseConfig);

class VotoModel extends Model { }

VotoModel.init(
  {
    idVoto: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    id_registro_voto_eleitor: {
      type: Sequelize.UUID,
      references: {
        model: RegistroVotoEleitorModel,
        key: 'idRegistroVotoEleitor',
      }
    },
    id_quant_votos_candidato: {
      type: Sequelize.UUIDV4(),
      references: {
        model: QuantidadeVotosCandidatosModel,
        key: 'idQuantVotosCandidato',
      },
    },
  },
  {
    sequelize,
    modelName: "votos",
    timestamps: true,
  }
);

RegistroVotoEleitorModel.belongsToMany(QuantidadeVotosCandidatosModel, { through: VotoModel });

QuantidadeVotosCandidatosModel.belongsToMany(RegistroVotoEleitorModel, { through: VotoModel });

VotoModel.belongsTo(RegistroVotoEleitorModel, {
  as: "RegistroVotoEleitor",
  foreignKey: "idRegistroVotoEleitor"
});

VotoModel.belongsTo(QuantidadeVotosCandidatosModel, {
  as: "QuantidadeVotosCandidatos",
  foreignKey: "idQuantVotosCandidato"
});

export default VotoModel;