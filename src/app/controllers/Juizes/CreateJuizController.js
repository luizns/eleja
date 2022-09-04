import CreateJuizService from "../../services/Juizes/CreateJuizService";

export default class CreateJuizController {
  constructor() {
    this.service = new CreateJuizService();
  }

 async create(req, res) {
    const { idJuiz, matricula } = req.body;

    const createdJuiz = await this.service.create(idJuiz, matricula);

    return res.status(200).json(createdJuiz);
  }
}
