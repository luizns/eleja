import UsuarioModel from "../../models/Usuarios/UsuarioModel";

export default class DeleteUsuarioService {

  constructor() {}

  async delete(id) {
    try {
      const usuario = await UsuarioModel.findByPk(id);

      await usuario.destroy();
  
      return { message: "Usuário deletado!"};
      } catch (error) {
        return { erro: error.message };
    }
  }
}