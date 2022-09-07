import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import TipoUsuarioModel from "./TipoUsuarioModel";

const sequelize = new Sequelize(databaseConfig);
class UsuarioModel extends Model {}

UsuarioModel.init(
  {
    idUsuario: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    id_tipo_usuario: {
      type: Sequelize.STRING,
      references: {
        model: TipoUsuarioModel,
        key: "idTipo",
      },
    },
  },
  {
    sequelize,
    modelName: "usuarios",
    timestamps: false,
  }
);

<<<<<<< HEAD
UsuarioModel.belongsTo(TipoUsuarioModel,{through:TipoUsuarioModel})
=======
UsuarioModel.belongsTo(TipoUsuarioModel, {
  through: TipoUsuarioModel,
  as: "tipo_usuarios",
  foreignKey: "id_tipo_usuario",
});
>>>>>>> 14e64fd86288e7fc4b9f1ffed4d0cab1c950f134

export default UsuarioModel;
