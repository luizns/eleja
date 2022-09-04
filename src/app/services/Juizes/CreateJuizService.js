import { v4 } from "uuid";
import JuizModel from "../../models/Juizes/JuizModel";

export default class CreateJuizService {
  constructor() {}

  async create(idJuiz, matricula,id_usuario) {
    try {
      const newJuiz = await JuizModel.create({ idJuiz: v4(), matricula ,id_usuario});
      return newJuiz;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
