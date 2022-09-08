import { v4 } from "uuid";
import VotoModel from "../../models/Votos/VotoModel";

export default class CriarVotoService {
  constructor() {}

  async create(
    id_registro_voto_eleitor,
    id_quant_votos_candidato
  ) {
    try {
      const voto = await VotoModel.create({
        idVoto: v4(),
        id_registro_voto_eleitor,
        id_quant_votos_candidato
      });

      return voto;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
