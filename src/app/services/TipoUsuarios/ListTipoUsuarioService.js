import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';

export default class ListTipoUsuarioService {

    constructor() {}
    
    async listAll() {
        try{
            const tipoUsuario = await TipoUsuarioModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt',] }
            });

            return tipoUsuario;
        } catch (err) {
            return { erro: err.message }
        }
    }
}