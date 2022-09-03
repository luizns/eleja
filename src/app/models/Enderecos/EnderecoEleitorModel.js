import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class EnderecoModel extends Model {}

EnderecoModel.init(
  {
    idEndereco: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    rua: Sequelize.STRING,
    bairro: Sequelize.STRING,
    numero: Sequelize.STRING,
    cidade:Sequelize.STRING,
    cep: Sequelize.STRING,
    id_eleitor:Sequelize.STRING,
    id_zona:Sequelize.STRING
   },
  {
    sequelize,
    modelName: "enderecos",
    timestamps: false,
  }
);
export default EnderecoModel;