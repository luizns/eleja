import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class UsuarioModel extends Model {}

UsuarioModel.init(
  {
    idusuario: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    id_tipo_usuario:Sequelize.STRING
   },
  {
    sequelize,
    modelName: "usuarios",
    timestamps: false,
  }
);
export default UsuarioModel;