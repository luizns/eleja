import { v4 } from "uuid";
import QuantVotosCandidatosModel from "../../../models/Votos/QuantVotosCandidatosModel";

export default class CreateQuantidadeVotosService {
  constructor() {}

  async create(
    idQuantVotosCandidato,
    dataHora,
    candidato_id
  ) {
    try {
      const voto = await QuantVotosCandidatosModel.create({
        idVoto: v4(),
        dataHora,
        idQuantVotosCandidato,
        candidato_id
      });

      return voto;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
