import ListTipoUsuarioService from '../../services/TipoUsuarios/ListTipoUsuarioService';

export default class ListAllController {
    constructor() {
        this.service = new ListTipoUsuarioService();
    }

    async listAll (req, res){
        const tipoUsuario = await this.service.listAll();

        return res.send(tipoUsuario);    
    }
}