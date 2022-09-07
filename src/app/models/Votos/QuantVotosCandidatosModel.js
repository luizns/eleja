import Sequelize, { Model, Sequelize } from "sequelize";
import databaseConfig from "../../../config/database";
import CandidatoModel from "../Candidatos/CandidatoModel";

const sequelize = new Sequelize(databaseConfig);

export default class QuantidadeVotosCandidatosModel extends Model { }

QuantidadeVotosCandidatosModel.init(
  {
    idQuantVotosCandidato: {
      type: Sequelize.UUIDV4(),
      primaryKey: true
    },
    dataHora: Sequelize.DATE,
    candidato_id: {
      type: Sequelize.UUID,
      references: {
        model: CandidatoModel,
        key: "idCandidato"
      }
    }
  },
  {
    sequelize,
    modelName: "quant_votos_candidatos",
    timestamps: true
  }
);
