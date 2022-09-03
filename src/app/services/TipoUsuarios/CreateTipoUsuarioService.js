import { v4 } from 'uuid';
import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';

export default class CreateTipoUsuarioService {
    constructor(){}

    async create (
        idtipo,
        descricao
        ) {
        try {
            const newTipoUsuario = await TipoUsuarioModel.create({
                idtipo: v4(),
                descricao
            });
            
            return newTipoUsuario;        
        } catch(error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}