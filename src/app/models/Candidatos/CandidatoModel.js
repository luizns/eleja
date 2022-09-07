import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import PartidoModel from "../Partidos/PartidoModel";
import JuizEleitoralModel from "../Partidos/PartidoModel";
import QuantVotosCandidatosModel from "../Votos/QuantVotosCandidatosModel";
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
      type: Sequelize.UUID,
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
    id_candidato_voto: {
      type: Sequelize.STRING,
      references: {
        model: QuantVotosCandidatosModel,
        key: 'idQuantVotosCandidato',
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
CandidatoModel.belongsTo(PartidoModel,{through:PartidoModel})

/*relação  Juiz X Candidatos 1:N*/
CandidatoModel.belongsTo(JuizEleitoralModel,{through:JuizEleitoralModel})

/*Relação Candidato X QuantidadeVotos 1:N */
CandidatoModel.belongsTo(QuantVotosCandidatosModel)

export default CandidatoModel;
