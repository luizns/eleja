import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class CandidatoModel extends Model {}

CandidatoModel.init(
  {
    idcandidato: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    nome_candidato: Sequelize.STRING,
    numero_candidato: Sequelize.STRING,
    id_partido: Sequelize.INTEGER,
    id_juiz_eleitoral: Sequelize.INTEGER,
    id_candidato_voto: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName:"candidatos",
    timestamps:false
  }
);

export default CandidatoModel;
