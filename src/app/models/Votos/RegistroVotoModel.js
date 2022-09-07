import Sequelize, { Model } from "sequelize";
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
    numeroDigitado: Sequelize.STRING,
    dataHoraVoto: Sequelize.DATE,
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