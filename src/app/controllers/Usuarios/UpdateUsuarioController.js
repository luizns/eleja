import UpdateUsuarioService from "../../services/Usuarios/UpdateUsuarioService";

export default class UpdateUsuarioController {

    constructor() {
        this.service = new UpdateUsuarioService();
    }

    update(request, response) {
        const { id } = request.params
        const {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        } = request.body;

        const updatedUsuario = this.service.update(
            id,
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        );

        response.json(updatedUsuario)
    }

}