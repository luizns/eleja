import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class VotoModel extends Model {}

VotoModel.init(
  {
    idvoto: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    id_reg_voto_eleitor: Sequelize.INTEGER,
    id_quant_votos: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName: "votos",
    timestamps: false,
  }
);
export default VotoModel;