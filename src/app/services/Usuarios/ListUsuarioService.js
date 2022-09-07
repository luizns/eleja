import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import { Op } from 'sequelize';

export default class ListUsuarioService {

    constructor() {}

    async listAll (nome) {
        try{
            if (nome){
                return await this.FindUsuario(nome);
            }

            const usuarios = await UsuarioModel.findAll();
            return usuarios;
        } catch(err) {
            return { erro: err.message };
        }
    }
    async FindUsuario(nome) {
        try { 
            const usuario = await UsuarioModel.findAll({
                where: { nome: { [Op.like]: `%${nome}%` } }          
            });

            if(!usuario) {
                return { message: "Usuario não encontrado!" }
            }
            return usuario;
        } catch (err){
            return { erro: err.message }
        }
    }
    async listOne(email, password) {
        try {
          const usuario = await UsuarioModel.findOne({
            where: {
              email,
            },
          });
    
          return usuario;
        } catch (error) {
          return { erro: error.message };
        }
      }

}