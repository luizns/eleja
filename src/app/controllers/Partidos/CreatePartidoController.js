import CreatePartidoService from "../../services/Partidos/CreatePartidoService";

export default class CreatePartidoController {
  constructor() {
    this.service = new CreatePartidoService();
  }

  async create(req, res) {
    const { idPartido, nome_partido, sigla, numero_legenda } = req.body;

    const createdPartido = await this.service.create(
      idPartido,
      nome_partido,
      sigla,
      numero_legenda
    );

    return res.status(200).json(createdPartido);
  }
}
