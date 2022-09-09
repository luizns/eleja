import { v4 } from "uuid";

import UsuarioModel from "../../models/Usuarios/UsuarioModel";
import HashPassword from "../../utils/HashPassword";
export default class CreateUsuarioService {
  constructor() {}
  
  async create(idUsuario, nome, email, senha,id_tipo_usuario) {
    try {
      const hashedPassword = HashPassword.hash(senha);
      const newUsuario = await UsuarioModel.create({
        idUsuario: v4(),
        nome,
        email,
        senha:hashedPassword,
        id_tipo_usuario
      });

      return newUsuario;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}