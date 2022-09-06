import { v4 } from "uuid";
import RegistroVotoModel from "../../../models/Votos/RegistroVotoEleitorModel";

export default class CreateRegistroVotoService {
  constructor() {}

  async create(idRegistroVotoEleitor, hora_voto, data_voto,id_eleitor) {
    try {
      const newRegistroVoto = await RegistroVotoModel.create({
        idRegistroVotoEleitor: v4(),
        hora_voto,
        data_voto,
        id_eleitor
      });

      return newRegistroVoto;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
