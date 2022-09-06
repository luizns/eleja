import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import UsuarioModel from "../Usuarios/UsuarioModel";

const sequelize = new Sequelize(databaseConfig);

class EleitorModel extends Model {}

EleitorModel.init(
  {
    idEleitor: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    cpf: Sequelize.STRING,
    titulo_eleitor: Sequelize.STRING,
    rg: Sequelize.STRING,
    idade:Sequelize.STRING,
    id_usuario:{ 
      type: Sequelize.UUID,
      references: {
        model: UsuarioModel,
        key: 'idUsuario',
      },
    },
  },
  {
    sequelize,
    modelName: "eleitores",
    timestamps: false,
  }
);
EleitorModel.belongsTo(UsuarioModel,{through:UsuarioModel})
export default EleitorModel;
