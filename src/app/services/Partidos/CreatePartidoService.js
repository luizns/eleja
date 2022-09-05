import { v4 } from "uuid";
import PartidoModel from "../../models/Partidos/PartidoModel";

export default class CreatePartidoService {
  constructor () {}

  async create(idPartido, nome_partido, sigla, numero_legenda) {
    try {
      const newPartido = await  PartidoModel.create({
        idPartido: v4(),
        nome_partido,
        sigla,
        numero_legenda
    });
      return newPartido;
      console.log(newPartido)
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
