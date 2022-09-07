import UsuarioModel from "../../models/Usuarios/UsuarioModel";
import DeleteUsuarioService from "../../services/Usuarios/DeleteUsuarioService";

export default class DeleteUsuarioController {

  constructor() {
    this.service = new DeleteUsuarioService();
  }

  async delete(req, res) {
    const { id } = req.params;

    const usuario = await UsuarioModel.findByPk(id);
  
    if (!usuario) {
        return res.status(400).json({ mensagem: "Usuário não encontrado!" });
    }

    const resultado = await this.service.delete(id);

    res.send(resultado);
  }
}