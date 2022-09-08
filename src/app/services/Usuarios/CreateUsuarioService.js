import HashSenha from "../../../utils/HashSenha";
import UsuarioModel from "../../models/Usuarios/UsuarioModel";

export default class CreateUsuarioService {
  constructor() {}

  async create( nome, email, senha, tipo_usuario_id) {
    
  const hashedSenha = HashSenha.hash(senha); 

  try {
    const newUsuario = await UsuarioModel.create({
      nome,
      email,
      senha: hashedSenha,
      tipo_usuario_id,
    });


    return  {  
      Id :`${newUsuario.dataValues['id']}`,
      Nome :`${newUsuario.dataValues['nome']}`,
      Email :`${newUsuario.dataValues['email']}`
  };
  } catch (error) {
    return { erro: error};
  }
  }
}