import DeleteUsuarioService from "../../services/Usuarios/DeleteUsuarioService";

export default class DeleteUsuarioController {

    constructor() {
        this.service = new DeleteUsuarioService();
    }

    delete (request, response) {
        const { id } = request.params;

        const deletedUsuario = this.service.delete(id);

        if (!deletedUsuario.sucess) {
            return response.status(400).json(deletedUsuario.message);
        }
        response.status(200).json(deletedUsuario.message)
    }

}