import DeleteEnderecoService from "../../services/Enderecos/DeleteEnderecoService";

export default class DeleteEnderecoService {
  constructor() {
    this.service = new DeleteEnderecoService();
  }

  async delete(req, res) {
    const { idEndereco } = req.params;

    const deletedEndereco = await this.service.delete(idEndereco);
    res.send(deletedEndereco);
  }
}
