import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class PartidoModel extends Model {}

PartidoModel.init(
  {
        idPartido: {
        type:Sequelize.UUIDV4(),
        primaryKey:true,
       },
        nome_partido: Sequelize.STRING,
        sigla: Sequelize.STRING,
        numero_legenda: Sequelize.STRING,
      },
      {
        sequelize,
        modelName:"partidos",
        timestamps:false
      }
 );
export default PartidoModel;