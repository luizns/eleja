import TipoUsuarioModel from '../../models/Usuarios/TipoUsuarioModel';

export default class ListTipoUsuarioService {
    
    listAll() {
        const tipoUsuario1 = new TipoUsuarioModel(
            "001",
            "130"
        );

        const tipoUsuario2 = new TipoUsuarioModel(
            "002",
            "250"
        );

        return [tipoUsuario1, tipoUsuario2];
    }
}