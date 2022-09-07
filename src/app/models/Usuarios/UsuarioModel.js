const { Sequelize, Model, DataTypes } = require('sequelize');
import databaseConfig from "../../../config/database";
import EleitorModel from "../Eleitores/EleitorModel";
import EnderecoModel from "../Enderecos/EnderecoEleitorModel";
import JuizEleitoralModel from "../Juizes/JuizModel";


const sequelize = new Sequelize(databaseConfig);

class UsuarioModel extends Model {}
UsuarioModel.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
  tipo_usuario_id: DataTypes.UUID,
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
  modelName: 'usuarios',
});


UsuarioModel.hasOne(EleitorModel, 
  { foreignKey: 'usuario_id', as: 'eleitores' });
EleitorModel.belongsTo(UsuarioModel);

UsuarioModel.hasOne(JuizEleitoralModel, 
  { foreignKey: 'usuario_id', as: 'juizes_eleitorais' });
JuizEleitoralModel.belongsTo(UsuarioModel);

UsuarioModel.hasOne(EnderecoModel, {  as: 'endereco_eleitores' });
EnderecoModel.belongsTo(UsuarioModel);

export default UsuarioModel;