import CriarVotoService from "../../services/Votos/CriarVotoService";

export default class CriarVotoController {
  constructor() {
    this.service = new CriarVotoService();
  }

  async criar(req, res) {
    const {
      id_registro_voto_eleitor,
      id_quant_votos_candidato
    } = req.body;

    const voto = await this.service.create(
      id_registro_voto_eleitor,
      id_quant_votos_candidato
    );

    return res.json(voto);
  }
}
