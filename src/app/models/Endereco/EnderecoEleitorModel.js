import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class EnderecoEleitorModel extends Model {}

EnderecoEleitorModel.init(
      {
        idendereco:{
          type:Sequelize.UUIDV4(),
          primaryKey:true,
      },
        rua: Sequelize.STRING,
        bairro: Sequelize.STRING,
        numero: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
        id_eleitor: Sequelize.INTEGER,
        id_zona: Sequelize.INTEGER,
      },
      {
        sequelize, 
        modelName:"enderecos",
        timestamps:false
      }
    );
    export default EnderecoEleitorModel;