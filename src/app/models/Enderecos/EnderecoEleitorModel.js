import { Sequelize, Model, DataTypes } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class EnderecoModel extends Model {}

EnderecoModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade:DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    eleitor_id: { type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4 },
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
    modelName: "endereco_eleitores",
    timestamps: true,
  }
);
export default EnderecoModel;