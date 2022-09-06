import UpdatePartidoService from "../../services/Partidos/UpdatePartidoService";

export default class UpdatePartidoController {
  constructor() {
    this.service = new UpdatePartidoService();
  }

  async update(req, res) {
    const { idPartido } = req.params;
    const { nome_partido, sigla, numero_legenda } = req.body;

    const updatedPartido = await this.service.update(
      idPartido,
      nome_partido,
      sigla,
      numero_legenda
    );

    res.json(updatedPartido);
  }
}
