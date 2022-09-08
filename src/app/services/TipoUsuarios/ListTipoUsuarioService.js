import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';

export default class ListTipoUsuarioService {
    constructor() { }

    async listAll() {
        try {
            const tipos = await TipoUsuarioModel.findAll()
            return tipos
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}