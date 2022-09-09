import { v4 } from "uuid";
import QuantVotosCandidatosModel from "../../../models/Votos/QuantVotosCandidatosModel";

export default class CreateQuantidadeVotosService {
  constructor() {}

  async create(
    idQuantVotosCandidato,
    hora_vota,
    data_voto,
    id_candidato
  ) {
    try {
      const votoCandidato = await QuantVotosCandidatosModel.create({
        idQuantVotosCandidato: v4(),
        hora_vota,
        data_voto,
        id_candidato
      });

      return votoCandidato;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
