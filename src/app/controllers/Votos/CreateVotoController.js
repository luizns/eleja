import CreateVotoService from "../../services/Votos/CreateVotoService";

export default class CreateVotoController {
  constructor() {
    this.service = new CreateVotoService();
  }

  async create(req, res) {
    const { idVoto, id_registro_voto_eleitor, id_quant_votos_candidato } =
      req.body;

    const createdVoto = await this.service.create(
      idVoto,
      id_registro_voto_eleitor,
      id_quant_votos_candidato
    );

    return res.status(200).json(createdVoto);
  }
}
