import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from "../../../config/database";
import CandidatoModel from '../../models/Candidatos/CandidatoModel'

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
    usuario_id: DataTypes.UUID,
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

JuizEleitoralModel.hasMany(CandidatoModel, {
  foreignKey: 'juiz_id', a: 'juizes_eleitorais'
});
CandidatoModel.belongsTo(JuizEleitoralModel);

export default JuizEleitoralModel;