import { v4 } from "uuid";
import VotoModel from "../../models/Votos/VotoModel";

export default class CreateVotoService {
  constructor() {}

  async create(idVoto, id_registro_voto_eleitor, id_quant_votos_candidato) {
    try {
      const newVoto = await VotoModel.create({
        idVoto: v4(),
        id_registro_voto_eleitor,
        id_quant_votos_candidato,
      });

      return newVoto;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
