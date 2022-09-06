import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);
class ZonaEnderecoEleitor extends Model {}

ZonaEnderecoEleitor.init(
  {
    idzona: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    secao: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "zonas",
    timestamps: false,
  }
);
export default ZonaEnderecoEleitor;