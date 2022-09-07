import { v4 } from "uuid";
import TipoUsuarioModel from "../../models/Usuarios/TipoUsuarioModel";

export default class CreateTipoUsuarioService {
  constructor() {}

  async create(
    descricao
  ) {
    try {
      const newTipoUsuario = await TipoUsuarioModel.create({
        idTipo: v4(),
        descricao,
      });

      return newTipoUsuario;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
