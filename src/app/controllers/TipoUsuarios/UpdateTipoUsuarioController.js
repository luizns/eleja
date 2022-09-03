import UpdateTipoUsuarioService from '../../services/TipoUsuarios/UpdateTipoUsuarioService';

export default class UpdateTipoUsuarioController {
    constructor() {
        this.service = new UpdateTipoUsuarioService();
    }

    update (req, res){
        const { idTipoUsuario } = req.params
        const {
            descricao
        } = req.body;

        const updatedTipoUsuario = this.service.Update(
            idTipoUsuario,
            descricao
        );

        res.json(updatedTipoUsuario)
    }
}