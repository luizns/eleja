import UsuarioModel from "../../models/Usuarios/UsuarioModel";
import HashPassword from "../../utils/HashPassword";
const { Op } = require("sequelize");

export default class UpdateUsuarioService {
  constructor() {}

  async update(idUsuario, nome, email, senha, id_tipo_usuario) {
    try {
      const usuario = await UsuarioModel.findByPk(idUsuario);

      if (!usuario) {
        return { mensagem: "Usuário não localizado com id: " + idUsuario };
      }
      const hashedPassword = HashPassword.hash(senha);
      const [numeroRegistrosAtualizado] = await UsuarioModel.update(
        {
          nome,
          email,
          senha: hashedPassword,
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

  async updateSessaoUsuario(idUsuario, email, token) {
    try {
      console.log("aqui")
      const usuario = await UsuarioModel.findByPk(idUsuario);

      await UsuarioModel.update(
        {
          token_sessao: token,
        },

        {
          where: {
            [Op.and]: [{ idUsuario: idUsuario }, { email: email }],
          },
        }
      );

      } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
