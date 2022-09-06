import ListUsuarioService from './ListUsuarioService';
export default class DeleteUsuarioService {

    constructor() {}

    delete(id) {
        const Usuarios = ListUsuarioService.listAll();
        const usuarioIndex = usuarios.findIndex(usuario => usuario.id === Number(id));

        if(usuarioIndex === -1){
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        Usuarios.splice(usuarioIndex, 1);

        return {
            sucess: true,
            message: "Usuário deletado com sucesso."
        }
    }
}