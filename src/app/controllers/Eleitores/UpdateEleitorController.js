import EleitorModel from '../../models/Eleitores/EleitorModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import UpdateEleitorService from '../../services/Eleitores/UpdateEleitorService';

export default class UpdateEleitorController {
    constructor() {
        this.service = new UpdateEleitorService();
    }

    async update (req, res){
        const { usuario_id, id  } = req.params
        const {
            cpf,
            titulo_eleitor,
            rg,

        } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);
        const eleitor = await EleitorModel.findByPk(id);

        if(!usuario || !eleitor){
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }

        const updatedEleitor = this.service.update(
            id,
            cpf,
            titulo_eleitor,
            rg,
        );

        res.json(updatedEleitor)
    }
}