import ListUsuarioService from './ListUsuarioService';

export default class UpdateUsuarioService {

    constructor() {}

    update(
        id,
        nome,
        email,
        senha,
        id_tipo_usuario
    ) {
        const usuarios = ListUsuarioService.listAll()
        const usuarioIndex = usuarios.findIndex(Usuario => usuario.id === Number(id))

        if (usuarioIndex === -1) {
            return {
                message: "ID não referente a qualquer usuário."
            }
        }

        usuarios[usuarioIndex] = {
            nome,
            email,
            senha,
            id_tipo_usuario
        }

        return {
            id,
            ...usuarios[usuarioIndex]
        }
    }
}