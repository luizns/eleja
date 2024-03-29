import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import EleitorModel from "../../models/Eleitores/EleitorModel";
import ZonaEnderecoEleitorModel from "../../models/Enderecos/ZonaEnderecoEleitorModel";
const sequelize = new Sequelize(databaseConfig);
class EnderecoModel extends Model {}

EnderecoModel.init(
  {
    idendereco: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    rua: Sequelize.STRING,
    bairro: Sequelize.STRING,
    numero: Sequelize.STRING,
    cidade: Sequelize.STRING,
    cep: Sequelize.STRING,
    uf:Sequelize.STRING,
    id_eleitor: {
      type: Sequelize.UUID,
      references: {
        model: EleitorModel,
        key: "idEleitor",
      },
    },
    id_zona: {
      type: Sequelize.UUID,
      references: {
        model: ZonaEnderecoEleitorModel,
        key: "idZona",
      },
    },
  },
  {
    sequelize,
    modelName: "endereco_eleitores",
    timestamps: false,
  }
);
EnderecoModel.belongsTo(EleitorModel, {
  through: EleitorModel,
  as: "eleitores",
  foreignKey: "id_eleitor",
});
EnderecoModel.belongsTo(ZonaEnderecoEleitorModel, {
  through: ZonaEnderecoEleitorModel,
  as: "zonas",
  foreignKey: "id_zona",
});
export default EnderecoModel;
