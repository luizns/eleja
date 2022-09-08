import UpdateJuizService from "../../services/Juizes/UpdateJuizService";

export default class UpdateJuizController {
  constructor() {
    this.service = new UpdateJuizService();
  }

  async update(req, res) {
    const { idJuiz } = req.params;
    const { matricula,id_usuario} = req.body;

    const updatedJuiz = await this.service.update(
      idJuiz,
      matricula,
      id_usuario
     );

    res.json(updatedJuiz);
  }
}
