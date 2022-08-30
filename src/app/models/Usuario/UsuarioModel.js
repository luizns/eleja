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
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    cpf: Sequelize.STRING,
    rg: Sequelize.STRING,
    titulo: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "usuarios",
    timestamps: false,
  }
);
