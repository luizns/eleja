import UsuarioModel from "../../models/Usuarios/UsuarioModel";

export default class UpdateUsuarioService {
  constructor() {}

  async update(idUsuario, nome, email, senha, id_tipo_usuario) {
    try {
      const usuario = await UsuarioModel.findByPk(idUsuario);

      if (!usuario) {
        return { mensagem: "Usuário não localizado com id: " + idUsuario };
      }

      const [numeroRegistrosAtualizado] = await UsuarioModel.update(
        {
          idUsuario,
          nome,
          email,
          senha,
          id_tipo_usuario,
        },

        {
          where: { idUsuario },
        }
      );

      if (numeroRegistrosAtualizado === 0) {
        return {
          mensagem: "Nenhuma alteração realizada, os dados são iguais!",
        };
      } else {
        return {
          mensagem: "Usuario atualizado com sucesso!",
          nome,
          email,
          id_tipo_usuario,
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}