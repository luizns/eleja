const { Sequelize, Model, DataTypes } = require('sequelize');
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);

class JuizEleitoralModel extends Model {}

JuizEleitoralModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    matricula: Sequelize.STRING,
    usuario_id: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4},
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
    modelName: "juizes_eleitorais",
    timestamps: true,
  }
);

export default JuizEleitoralModel;