import DeleteUsuarioService from "../../services/Usuarios/DeleteUsuarioService";

export default class DeleteUsuarioController {

    constructor() {
        this.service = new DeleteUsuarioService();
    }

    delete (req, res) {
        const { id } = req.params;

        const deletedUsuario = this.service.delete(id);

        if (!deletedUsuario.sucess) {
            return res.status(400).json(deletedUsuario.message);
        }
        res.status(200).json(deletedUsuario.message)
    }

}