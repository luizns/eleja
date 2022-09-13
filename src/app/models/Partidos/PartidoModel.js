import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from "../../../config/database";
import CandidatoModel from '../Candidatos/CandidatoModel';

const sequelize = new Sequelize(databaseConfig);

class PartidoModel extends Model {}

PartidoModel.init(
  {
    id: {
    type: DataTypes.UUID,
    primaryKey:true,
    defaultValue: DataTypes.UUIDV4
    },
    nome_partido: Sequelize.STRING,
    sigla: Sequelize.STRING,
    numero_legenda: Sequelize.STRING,
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
    modelName:"partidos",

  }
 );

PartidoModel.hasOne(CandidatoModel, { foreignKey: 'partido_id', as: 'partidos' });
CandidatoModel.belongsTo(PartidoModel)

export default PartidoModel
   