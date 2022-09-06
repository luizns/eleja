import { v4 } from "uuid";
import RegistroVotoModel from "../../../models/Votos/RegistroVotoModel";
import CandidatoModel from "../../../models/Candidatos/CandidatoModel";

export default class CreateRegistroVotoService {
  constructor() { }

  async criar(
    numeroDigitado,
    dataHoraVoto,
    id_eleitor
  ) {
    try {
      if (!numeroDigitado) {
        return {erro: "Número do candidato deve ser informado."}
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
