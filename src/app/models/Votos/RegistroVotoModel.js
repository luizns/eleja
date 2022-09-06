import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

import EleitorModel from "../Eleitores/EleitorModel"

const sequelize = new Sequelize(databaseConfig);

class RegistroVotoModel extends Model {}

RegistroVotoModel.init(
  {
    idRegistroVotoEleitor: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    numeroDigitado: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    dataHoraVoto: {
      type: Sequelize.DATA,
      allowNull: false
    },
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
    timestamps: true,
  }
);

RegistroVotoModel.belongsTo(EleitorModel);

EleitorModel.hasOne(RegistroVotoModel, {
  foreignKey: "idEleitor"
});

export default RegistroVotoModel;

/* 
  hora_voto: {
    type: Sequelize.TIME,
    allowNull: false,
    defaultValue: Sequelize.fn('now')
  },
  data_voto: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.fn('now')}
*/