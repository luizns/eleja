import ListTipoUsuarioService from './ListTipoUsuarioService';

export default class UpdateTipoUsuarioService {

    constructor() {
        this.service = new ListTipoUsuarioService();
    }

    Update (
        idTipoUsuario,
        secao
    ) {
        const tipoUsuarios = this.service.listAll()
        const tipoUsuarioIndex = tipoUsuarios.findIndex(tipoUsuario => tipoUsuario.id === Number(id))

        if (tipoUsuarioIndex === -1) {
            return {
                message: "ID não referente a qualquer TipoUsuario."
            }
        }

        tipoUsuarios[tipoUsuarioIndex] = {
            idTipoUsuario,
            secao
        }

        return {
            id,
            ...tipoUsuarios[tipoUsuarioIndex]
        }
    }
}