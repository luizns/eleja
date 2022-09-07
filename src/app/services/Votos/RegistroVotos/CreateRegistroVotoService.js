import { v4 } from "uuid";
import RegistroVotoModel from "../../../models/Votos/RegistroVotoModel";

import CandidatoModel from "../../../models/Candidatos/CandidatoModel";

export default class CreateRegistroVotoService {
  constructor() {}

  async create(
    numeroDigitado,
    dataHoraVoto,
    id_eleitor
  ) {
    try {
      if (!numeroDigitado) {
        return await res.json({ erro: "Número do candidato deve ser informado." })
      }

      const candidato = CandidatoModel.listOne({ where: { numero_candidato: numeroDigitado }})

      if (candidato.length === 0) {
        return await res.json({ mensagem: "Número do candidato não encontrado." })
      }

      const registroVoto = await RegistroVotoModel.create({
        idRegistroVotoEleitor: v4(),
        numeroDigitado,
        dataHoraVoto,
        id_eleitor
      });

      return registroVoto;

    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}