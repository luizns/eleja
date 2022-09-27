import UpdateEnderecoService from "../../services/Enderecos/UpdateEnderecoService";

export default class UpdateEnderecoController {
  constructor() {
    this.service = new UpdateEnderecoService();
  }

  async update(req, res) {
    const { idEndereco } = req.params;
    const { rua, bairro, numero, cidade, cep,uf } = req.body;

    const updatedEndereco = await this.service.update(
      idEndereco,
      rua,
      bairro,
      numero,
      cidade,
      cep,
      uf,
    );

    res.json(updatedEndereco);
  }
}
