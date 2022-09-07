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
    numeroCandidato: Sequelize.STRING,
    contagemDeVotos: Sequelize.INTEGER
  },
  {
    sequelize,
    modelName: "quant_votos_candidatos",
    timestamps: true
  }
);
