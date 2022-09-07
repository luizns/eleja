import EleitorModel from '../../models/Eleitores/EleitorModel';
import JuizEleitoralModel from '../../models/Juizes/JuizModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import UpdateJuizService from '../../services/Juizes/UpdateJuizService';

export default class UpdateJuizController {
    constructor() {
        this.service = new UpdateJuizService();
    }

    async update (req, res){
        const { usuario_id, id  } = req.params
        const { matricula } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);
        const juiz = await JuizEleitoralModel.findByPk(id);

        if(!usuario || !juiz){
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }

        const updatedJuiz = this.service.update(
            id,
            matricula
        );

        res.json(updatedJuiz)
    }
}