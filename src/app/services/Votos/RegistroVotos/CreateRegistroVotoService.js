import { v4 } from "uuid";
import RegistroVotoModel from "../../../models/Votos/RegistroVotoModel";

export default class CreateRegistroVotoService {
  constructor() {}

  async create(
    dataHora,
    id_eleitor
  ) {
    try {
      const registroVoto = await RegistroVotoModel.create({
        idRegistroVotoEleitor: v4(),
        dataHora,
        id_eleitor
      });

      return registroVoto;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}