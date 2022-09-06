import ListTipoUsuarioService from './ListTipoUsuarioService';

export default class DeleteTipoUsuarioService {
    constructor() { 
        this.service = new ListTipoUsuarioService();
      }

    delete(id) {
        const tipoUsuarios = this.service.listAll();
        const tipoUsuarioIndex = tipoUsuarios.findIndex(tipoUsuario => tipoUsuario.id === Number(id));

        if(tipoUsuarioIndex === -1){
            return {
                message: "ID não referente a qualquer TipoUsuario."
            }
        }

        tipoUsuarios.splice(tipoUsuarioIndex, 1);

        return {
            sucess: true,
            message: "TipoUsuario deletado com sucesso."
        }
    }
}