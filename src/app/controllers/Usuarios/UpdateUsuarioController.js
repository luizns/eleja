import UpdateUsuarioService from "../../services/Usuarios/UpdateUsuarioService";

export default class UpdateUsuarioController {

    constructor() {
        this.service = new UpdateUsuarioService();
    }

    update(req, res) {
        const { id } = req.params
        const {
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        } = req.body;

        const updatedUsuario = this.service.update(
            id,
            name,
            cpf,
            rg,
            titulo,
            email,
            password
        );

        res.json(updatedUsuario)
    }

}