import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";


const sequelize = new Sequelize(databaseConfig);export default class ZonaEnderecoEleitor extends Model {}
 ZonaEnderecoEleitor.init({
    idzona_endereco_eleitor: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    secao: Sequelize.STRING,

 })
      // {
      //   idzona: Sequelize.INTEGER,
      //   secao: Sequelize.STRING,
      // },
      // {
      //   sequelize,
      // }

