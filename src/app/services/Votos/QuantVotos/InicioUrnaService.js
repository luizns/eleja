import QuantidadeVotoModel from "../../../models/Votos/QuantVotosCandidatosModel";

export default class InicioUrnaService {
  constructor() {}

  async initiate() {
    const votos = await QuantidadeVotoModel.findAll()

    if (votos.length !== 0) {
        return { mensagem: `A urna já foi iniciada e já tem ${votos.length} voto(s) computados.` }
    }

    return votos
  }
}
