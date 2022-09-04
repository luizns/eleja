import { v4 } from "uuid";
import JuizModel from "../../models/Juizes/JuizModel";

export default class CreateJuizService {
  constructor() {}

  async create(idJuiz, matricula) {
    try {
      const newJuiz = await JuizModel.create({ idJuiz: v4(), matricula });
      return newJuiz;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
