import UsuarioModel from "../../models/Usuarios/UsuarioModel";

export default class ListUsuarioService {
  constructor() {}

  async listAll(nomeUsuario) {
    try {
      if (nomeUsuario) {
        return await this.listOne(nomeUsuario);
      }
      const usuarios = await UsuarioModel.findAll();
      return usuarios;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
  async listOne(nomeUsuario) {
    try {
      const usuario = await UsuarioModel.findOne({
        where: {
          nome: nomeUsuario,
        },
      });

      if (!usuario) {
        return {
          mesagem: "Usuario não localizado com o nome: " + nomeUsuario,
        };
      }

      return usuario;
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
