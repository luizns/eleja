import jwt from 'jsonwebtoken';

import ListUsuarioService from '../../services/Usuarios/ListUsuarioService';
import updateUsuarioService from '../../services/Usuarios/UpdateUsuarioService';
import HashPassword from '../../utils/HashPassword';

export  default class SessionController { 
  constructor() {}
   static async create(req, res) {
    const { email, senha } = req.body
    const service= new ListUsuarioService();
    const serviceUpdate= new updateUsuarioService();
    const usuario =await service.listUserSessao(email, senha)


  if(!usuario) {
      return res.status(401).json({error: 'Usuário não encontrado'})
    }
    const ehSenhaValida= HashPassword.validate(senha,usuario.senha)
    
    if (!ehSenhaValida) {
      return res.status(401).json({ error: "Atenção a senha é inválida" });
    }
    const {idUsuario, nome} = usuario;
    const token=jwt.sign({ idUsuario }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: '1d'});
      
    const gravaTokenSessao=await serviceUpdate.updateSessaoUsuario(idUsuario,email,token);
  
    return res.json({
      usuario: {
        idUsuario,
        nome,
        email,
        token
      }
    })
  }
}


