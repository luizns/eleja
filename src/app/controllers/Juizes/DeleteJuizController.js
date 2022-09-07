import DeleteJuizService from "../../services/Juizes/DeleteJuizService";

export default class DeleteJuizController {
  constructor() {
    this.service = new DeleteJuizService();
  }

  async delete(req, res) {
    const { idJuiz } = req.params;

    const deletedJuiz = await this.service.delete(idJuiz);
    
    res.send(deletedJuiz);
  }
}
