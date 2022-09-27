import QuantVotosCandidatosModel from "../../models/Votos/QuantVotosCandidatosModel";

export default class InicioUrnaService {
  constructor() {}

  async initiate() {
    const votos = await QuantVotosCandidatosModel.findAll()

    if (votos) {
        return { mensagem: `A urna já foi iniciada e já tem ${votos.length} voto(s) computados.` }
    }

    return votos
  }
}
