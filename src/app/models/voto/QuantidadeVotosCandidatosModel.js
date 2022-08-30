import Sequelize, { Model, Sequelize } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class QuantidadeVotosCandidatosModel extends Model {}

QuantidadeVotosCandidatosModel.init(
      {
        idquant_votos_candidato:{ 
         type:Sequelize.INTEGER,
         primaryKey:true
        },
        hora_voto: Sequelize.DATE,
        data_voto: Sequelize.DATEONLY,
      },
      {
        sequelize,
        modelName:"quant_votos_candidatos",
        timestamps:false
      }
    );