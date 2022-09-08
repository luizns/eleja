import CreateVotoService from "../../services/Votos/CreateVotoService";

export default class CreateVotoController {
  constructor() {
    this.service = new CreateVotoService();
  }

  async create(req, res) {
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
