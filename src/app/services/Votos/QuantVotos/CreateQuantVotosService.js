import { v4 } from "uuid";
import QuantVotosCandidatosModel from "../../../models/Votos/QuantVotosCandidatosModel";

export default class CreateQuantidadeVotosService {
  constructor() {}

  async create(
     hora_vota,
    data_voto,
    id_candidato_voto
  ) {
    try {
      const votoCandidato = await QuantVotosCandidatosModel.create({
        idQuantVotosCandidato: v4(),
        hora_vota,
        data_voto,
        id_candidato_voto
      });

      return votoCandidato;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
