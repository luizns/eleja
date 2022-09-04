import CreateJuizService from "../../services/Juizes/CreateJuizService";

export default class CreateJuizController {
  constructor() {
    this.service = new CreateJuizService();
  }

 async create(req, res) {
    const { idJuiz, matricula,id_usuario } = req.body;

    const createdJuiz = await this.service.create(idJuiz, matricula,id_usuario);

    return res.status(200).json(createdJuiz);
  }
}
