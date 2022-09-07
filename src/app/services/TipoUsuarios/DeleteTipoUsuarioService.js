import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';
import ListTipoUsuarioService from './ListTipoUsuarioService';

export default class DeleteTipoUsuarioService {
    constructor() {}

    async delete(id) {
        try{
            
            const tipoUsuarios = await TipoUsuarioModel.findByPk(id);
    
            await tipoUsuarios.destroy();
            
            return { message: "Tipo de Usuário deletado!"};

        } catch(error) {
            return { erro: error.message };
        }
        
    }
}