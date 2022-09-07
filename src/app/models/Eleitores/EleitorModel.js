import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from "../../../config/database";
import EnderecoModel from '../Enderecos/EnderecoEleitorModel';

const sequelize = new Sequelize(databaseConfig);

class EleitorModel extends Model {}

EleitorModel.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  cpf: DataTypes.STRING,
  titulo_eleitor: DataTypes.STRING,
  rg: DataTypes.STRING,
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
  modelName: 'eleitores',
  timestamps: true
});

EleitorModel.hasOne(EnderecoModel, {
  foreignKey: 'eleitor_id', as: 'endereco_eleitores'
});
EnderecoModel.belongsTo(EleitorModel);



export default EleitorModel;