import ListPartidosService from "../../services/Partidos/ListPartidoService";

export default class ListAllController {
  constructor() {
    this.service = new ListPartidosService();
  }

  async listAll(req, res) {
    const { nome } = req.query;

    const partidos = await this.service.listAll(nome);

    res.json(partidos);
  }
}
