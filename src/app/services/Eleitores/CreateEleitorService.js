import { v4 } from "uuid";
import EleitorModel from "../../models/Eleitores/EleitorModel";

export default class CreateEleitorService {
  constructor () {}
  
  async create(idEleitor, cpf, titulo_eleitor, rg,idade , id_usuario) {
    try {
      const newEleitor = await EleitorModel.create({
        idEleitor: v4(),
        cpf,
        titulo_eleitor,
        rg,
        idade,
        id_usuario,
      });
      return newEleitor;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
