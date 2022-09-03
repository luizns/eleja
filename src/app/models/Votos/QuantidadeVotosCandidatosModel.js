import Sequelize, { Model, Sequelize } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class QuantidadeVotosCandidatosModel extends Model {}

QuantidadeVotosCandidatosModel.init(
      {
        idquant_votos_candidato:{ 
         type:Sequelize.UUIDV4(),
         primaryKey:true
        },
        hora_voto:{
          type: Sequelize.TIME,
          allowNull: false,
          defaultValue: Sequelize.fn('now')
        },
        data_voto: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaultValue: Sequelize.fn('now')
        }
      },
      {
        sequelize,
        modelName:"quant_votos_candidatos",
        timestamps:false
      }
    );
    export default QuantidadeVotosCandidatosModel;