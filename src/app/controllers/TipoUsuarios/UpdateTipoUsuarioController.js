import UpdateTipoUsuarioService from '../../services/TipoUsuarios/UpdateTipoUsuarioService';

export default class UpdateTipoUsuarioController {
    constructor() {
        this.service = new UpdateTipoUsuarioService();
    }

    async update(req, res) {
        const { id } = req.params
        const { descricao } = req.body;

        if (!descricao) {
            return await res.json({ mensagem: "Descrição é um campo obrigatório." })
        }

        const updatedTipoUsuario = await this.service.update(id, descricao);

        res.json(updatedTipoUsuario)
    }
}
