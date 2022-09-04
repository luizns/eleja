import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import UsuarioModel from "./UsuarioModel";

const sequelize = new Sequelize(databaseConfig);
class TipoUsuarioModel extends Model {}

TipoUsuarioModel.init(
  {
    idTipo: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    descricao: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "tipo_usuarios",
    timestamps: false,
  }
);

export default TipoUsuarioModel;