import UpdateUsuarioService from "../../services/Usuarios/UpdateUsuarioService";

export default class UpdateUsuarioController {
  constructor() {
    this.service = new UpdateUsuarioService();
  }

  async update(req, res) {
    const { idUsuario } = req.params;
    const { nome, email,senha,id_tipo_usuario} = req.body;

    const updatedUsuario = await this.service.update(
      idUsuario,
      nome,
      email,
      senha,
      id_tipo_usuario,
     );

    res.json(updatedUsuario);
  }
}
