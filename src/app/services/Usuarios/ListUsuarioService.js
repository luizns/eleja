import UsuarioModel from '../../models/Usuarios/UsuarioModel';

export default class ListUsuarioService {

    constructor() {}

    listAll () {
        const usuario1 = new UsuarioModel(
            1,
            "Rodrigo",
            "05202377402",
            "8524156",
            "086598750456",
            "rodrigomoreiralima@hotmail.com"
        );

        const usuario2 = new UsuarioModel(
            2,
            "Jackson",
            "05514164642",
            "854142486",
            "0846915501651",
            "jack@hotmail.com",
        );

        return [usuario1, usuario2];
    }
    FindUsuario(email, password) {
        const usuario = ListUsuarioService.listAll().find(usuario => usuario.email === email && usuario.password === password)
    
        return usuario
      }
}