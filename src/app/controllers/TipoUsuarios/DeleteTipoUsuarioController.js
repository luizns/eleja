import DeleteTipoUsuarioService from '../../services/TipoUsuarios/DeleteTipoUsuarioService';

export default class DeleteTipoUsuarioController {

    constructor() {
        this.service = new DeleteTipoUsuarioService();
    }

    async delete(req, res) {
        const { id } = req.params;

        const tipoUsuarioDeletado = await this.service.delete(id);

        res.json(tipoUsuarioDeletado);
    }
}
