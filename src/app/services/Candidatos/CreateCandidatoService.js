import { v4 } from "uuid";
import CandidatoModel from "../../models/Candidatos/CandidatoModel";

export default class CreateCandidatoService {
  constructor() {}
  async create(
    idCandidato,
    nome_candidato,
    numero_candidato,
    id_partido,
    id_juiz_eleitoral,
    id_candidato_voto
  ) {
    try {
      const newCandidato = await CandidatoModel.create({
        idCandidato: v4(),
        nome_candidato,
        numero_candidato,
        id_partido,
        id_juiz_eleitoral,
        id_candidato_voto,
      });
      console.log(newCandidato);
      return newCandidato;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
