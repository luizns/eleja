import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import UsuarioModel from "../Usuarios/UsuarioModel";
const sequelize = new Sequelize(databaseConfig);
class JuizEleitoralModel extends Model {}

JuizEleitoralModel.init(
  {
    idJuiz: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    matricula: Sequelize.STRING,
    id_usuario: {
      type: Sequelize.UUIDV4,
      references: {
        model: UsuarioModel,
        key: "idUsuario",
      },
    },
  },
  {
    sequelize,
    modelName: "juizes_eleitorais",
    timestamps: false,
  }
);
JuizEleitoralModel.belongsTo(UsuarioModel, { trough: UsuarioModel,
as: "usuario",
foreignKey: "id_usuario" });

export default JuizEleitoralModel;
