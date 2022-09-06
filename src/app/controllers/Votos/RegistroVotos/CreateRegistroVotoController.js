import CreateRegistroVotoService from "../../../services/Votos/RegistroVotos/CreateRegistroVotoService";

export default class CreateRegistroVotoController {
  constructor() {
    this.service = new CreateRegistroVotoService();
  }

  async create(req, res) {
    const { idRegistroVotoEleitor, hora_voto, data_voto,id_eleitor } = req.body;

    const createdRegistroVoto = await this.service.create(
      idRegistroVotoEleitor,
      hora_voto,
      data_voto,
      id_eleitor
    );

    return res.status(200).json(createdRegistroVoto);
  }
}
