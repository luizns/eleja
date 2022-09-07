import jwt from 'jsonwebtoken';
import ListUsuarioService from '../../services/Usuarios/ListUsuarioService'
import HashSenha from '../../../utils/HashSenha';

export default class SessionController { 
  constructor() { }

  static async create(req, res) {
    const { email, senha } = req.body

    const service = new ListUsuarioService();

    const usuario = await service.listOne(email);

    if(!usuario) {
        return res.status(401).json({error: 'Usuário não encontrado!'})
    }
  
  const isSenhaValida = HashSenha.validate(
    senha,
    usuario.senha
  );

  if(!isSenhaValida) {
    return res.status(401).json({ error: "senha invalida!" })
  }

  const {idusuario, nome} = usuario;

  return res.json({
    usuario: {
      idusuario,
      nome,
      email
    },
    token: jwt.sign({ idusuario }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: '5d'
    })
  })
}
};

