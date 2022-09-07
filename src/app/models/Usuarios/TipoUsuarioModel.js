import { Sequelize, Model, DataTypes } from "sequelize";
import databaseConfig from "../../../config/database";
import UsuarioModel from "./UsuarioModel";

const sequelize = new Sequelize(databaseConfig);
class TipoUsuarioModel extends Model {}

TipoUsuarioModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    descricao: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      field: 'update_at',
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    modelName: "tipo_usuarios",
  }
);

export default TipoUsuarioModel;