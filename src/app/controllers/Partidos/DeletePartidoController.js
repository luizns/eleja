import DeletePartidoService from "../../services/Partidos/DeletePartidoService";

export default class DeletePartidoService {
  constructor() {
    this.service = new DeletePartidoService();
  }

  async delete(req, res) {
    const { idPartido } = req.params;
  
    const deletedPartido = await this.service.delete(idPartido);

    res.send(deletedPartido);
  }
}
