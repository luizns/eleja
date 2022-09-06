import DeleteUsuarioService from "../../services/Usuarios/DeleteUsuarioService";

export default class DeleteUsuarioController {
  constructor() {
    this.service = new DeleteUsuarioService();
  }

  async delete(req, res) {
    const { idUsuario } = req.params;

    const deletedUsuario = await this.service.delete(idUsuario);
    res.send(deletedUsuario);
  }
}
