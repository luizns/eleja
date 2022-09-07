import UpdateEleitorService from "../../services/Eleitores/UpdateEleitorService";

export default class UpdateEleitorController {
  constructor() {
    this.service = new UpdateEleitorService();
  }

  async update(req, res) {
    const { idEleitor } = req.params;
    const {
        cpf,
        titulo_eleitor,
        rg,
        idade,
        id_usuario } = req.body;

    const updatedEleitor = await this.service.update(
        idEleitor,
        cpf,
        titulo_eleitor,
        rg,
        idade,
        id_usuario
     );

    res.json(updatedEleitor);
  }
}
