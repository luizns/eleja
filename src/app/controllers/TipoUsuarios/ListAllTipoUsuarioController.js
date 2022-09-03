import ListTipoUsuarioService from '../../services/TipoUsuarios/ListTipoUsuarioService';

export default class ListAllController {
    constructor() {
        this.service = new ListTipoUsuarioService();
    }

    listAll (req, res){
        const tipoUsuario = this.service.listAll();

        return res.send(tipoUsuario);
        
    }
}