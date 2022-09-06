import { v4 } from "uuid";

import UserModel from "../../models/Usuario/UsuarioModel";

export default class CreateUserService {
  constructor() {}

  async create(idusuario, nome, email, senha,id_tipo_usuario) {
    try {
      const newUser = await UserModel.create({
        idusuario: v4(),
        nome,
        email,
        senha,
        id_tipo_usuario
      });

      return newUser;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
