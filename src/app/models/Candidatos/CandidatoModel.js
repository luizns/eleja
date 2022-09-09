import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import PartidoModel from "../Partidos/PartidoModel";
import JuizEleitoralModel from "../Partidos/PartidoModel";
const sequelize = new Sequelize(databaseConfig);
class CandidatoModel extends Model {}

CandidatoModel.init(
  {
    idCandidato: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    nome_candidato: Sequelize.STRING,
    numero_candidato: Sequelize.STRING,

    id_partido: {
      type: Sequelize.UUIDV4(),
       references: {
        model: PartidoModel,
        key: 'idPartido',
      },
    },
    id_juiz_eleitoral: {
      type: Sequelize.STRING,
      references: {
        model: JuizEleitoralModel,
        key: 'idJuiz',
      },
    },
  },
  {
    sequelize,
    modelName: "candidatos",
    timestamps: false,
  }
);
/*relação  Partido x candidato 1:N*/
CandidatoModel.belongsTo(PartidoModel,{through:PartidoModel,
as: "partido",
foreignKey: "id_partido"})

/*relação  Juiz X Candidatos 1:N*/
CandidatoModel.belongsTo(JuizEleitoralModel,{through:JuizEleitoralModel,
  as: "juiz",
  foreignKey: "id_juiz_eleitoral"})

export default CandidatoModel;
