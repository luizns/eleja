import Sequelize, { Model, Sequelize } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);

export default class QuantidadeVotosCandidatosModel extends Model {}

QuantidadeVotosCandidatosModel.init(
  {
    idQuantVotosCandidato: {
      type: Sequelize.UUIDV4(),
      primaryKey: true
    },
    hora_voto:Sequelize.DATE,
    data_voto: Sequelize.DATEONLY,
   },
  {
    sequelize,
    modelName: "quant_votos_candidatos",
    timestamps: false
  }
);
