import DeleteEleitorService from "../../services/Eleitores/DeleteEleitorService";

export default class DeleteEleitorController {
  constructor() {
    this.service = new DeleteEleitorService();
  }

  async delete(req, res) {
    const { idEleitor } = req.params;

    const deletedEleitor = await this.service.delete(idEleitor);
    
    res.send(deletedEleitor);
  }
}
