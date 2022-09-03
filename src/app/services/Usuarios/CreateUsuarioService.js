import { v4 } from "uuid";

import UsuarioModel from "../../models/Usuarios/UsuarioModel";

export default class CreateUsuarioService {
  constructor() {}

  async create(idusuario, nome, email, senha,id_tipo_usuario) {
    try {
      const newUsuario = await UsuarioModel.create({
        idusuario: v4(),
        nome,
        email,
        senha,
        id_tipo_usuario
      });

      return newUsuario;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}