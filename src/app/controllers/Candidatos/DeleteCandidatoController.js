import DeleteCandidatoService from "../../services/Candidatos/DeleteCandidatoService";

export default class DeleteCandidatoController {
  constructor() {
    this.service = new DeleteCandidatoService();
  }

  async delete(req, res) {
    const { idCandidato } = req.params;

    const deletedCandidato = await this.service.delete(idCandidato);
    
    res.send(deletedCandidato);
  }
}
