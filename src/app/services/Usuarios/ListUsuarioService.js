import UsuarioModel from "../../models/Usuarios/UsuarioModel";
const { Op } = require("sequelize");

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
  async listUserSessao(email,senha) {
    try {
      const usuarios = await UsuarioModel.findOne({
        where:{
          email,
          }

      });
      return usuarios;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listOne(dadoUsuario) {
    try {
      const usuario = await UsuarioModel.findOne({
        where: {
          [Op.or]: [
            { nome: { [Op.like]: "%" + dadoUsuario + "%" } },
            { email: { [Op.like]: "%" + dadoUsuario + "%" } },
          ],
        },
      });

      if (!usuario) {
        return {
          mesagem: "Usuario não localizado com o nome: " + dadoUsuario,
        };
      }

      return usuario;
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }

  async listUsuarioToken(tokenRequisicao) {
    try {
       
      const usuario = await UsuarioModel.findOne({
        where: {
          token_sessao:tokenRequisicao
        },
      });
         
      return usuario.get('token_sessao');
     
            
    } catch (error) {
      //console.log(error);
      //return { erro: error.message };
    }
  }
}
