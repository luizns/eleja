import UsuarioModel from "../../models/Usuarios/UsuarioModel";
export default class DeleteUsuarioService {
  constructor() {}

  async delete(idUsuario) {
    try {
      const usuario = await UsuarioModel.findByPk(idUsuario);
      
      if (!usuario) {
        return { message: "Usuário não encontrado com id: " + idUsuario };
      }

      const nomeUsuario = usuario.get("nome");
      await usuario.destroy();

      return {
        mensagem: "O usuário foi removido com sucesso!",
        nomeUsuario: nomeUsuario,
        idUsuario: idUsuario,
      };
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
