import UsuarioModel from "../../models/Usuarios/UsuarioModel";

export default class UpdateUsuarioService {
  constructor() { }

  async update(id, nome, email, senha)
  {
    try {

      const [numeroDeRegistrosAtualizados] = await UsuarioModel.update(
        {
          nome,
          email,
          senha,
        },
        {
          where: { id },
        }
      );
      if ([numeroDeRegistrosAtualizados] === 0) {
        return { mensagem: "Dados iguais" };
      } 
      
      return { id, nome, email, senha };
      
    } catch (error) {
      return { erro: error.message };
    }
  }
}
