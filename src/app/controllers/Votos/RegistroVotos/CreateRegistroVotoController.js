import CreateRegistroVotoService from "../../../services/Votos/RegistroVotos/CreateRegistroVotoService";

export default class CreateRegistroVotoController {
  constructor() {
    this.service = new CreateRegistroVotoService();
  }

  async create(req, res) {
    const { id_eleitor } = req.body;

    const registroVoto = await this.service.create(id_eleitor);

    return res.json(registroVoto);
  }
}