import Sequelize, { Association, Model } from "sequelize";
import databaseConfig from "../../../config/database";

import EleitorModel from "../Eleitores/EleitorModel"

const sequelize = new Sequelize(databaseConfig);

export default class RegistroVotoModel extends Model {}

RegistroVotoModel.init(
  {
    idRegistroVotoEleitor: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    data_voto: Sequelize.STRING,
    hora_voto: Sequelize.STRING,
    id_eleitor: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: EleitorModel,
        key: 'idEleitor',
      },
    }
  },
  {
    sequelize,
    modelName: "registra_voto_eleitores",
    timestamps: false,
    freezeTableName:true,
    constraints: false
    
  })

  RegistroVotoModel.associate = (EleitorModel) => {
    RegistroVotoModel.belongsTo(EleitorModel.idEleitor, { foreignKey: 'id_eleitor' });
  };