import Sequelize, { Model } from "sequelize"

export default class UserModel extends Model {
    static init(sequelize){
        super.init({
          id: Sequelize.UUIDV4(),
          name: Sequelize.STRING,
          email: Sequelize.STRING,
          password: Sequelize.STRING,
          cpf: Sequelize.STRING,
          rg: Sequelize.STRING,
          titulo: Sequelize.STRING
        }, {
          sequelize
        })
      }
}
