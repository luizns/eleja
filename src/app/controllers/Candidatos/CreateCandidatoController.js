import JuizEleitoralModel from '../../models/Juizes/JuizModel';
import UsuarioModel from '../../models/Usuarios/UsuarioModel';
import CreateCandidatoService from '../../services/Candidatos/CreateCandidatoService';

export default class CreateCandidoController {
    
        constructor() {
            this.service = new CreateCandidatoService();
        }

    async create (req, res){
        const { usuario_id, juiz_eleitoral_id } = req.params;

        const {
            nome,
            numero,
            partido_id,
            candidato_voto_id
        } = req.body;

        const usuario = await UsuarioModel.findByPk(usuario_id);

        const juiz = await JuizEleitoralModel.findByPk(juiz_eleitoral_id);

        if(!usuario || !juiz) {
            return res.status(404).json({ error: 'Usuário não encontrado!' })
        }
    
        const createdCandidato = this.service.create(
            nome,
            numero,
            partido_id,
            juiz_eleitoral_id,
            candidato_voto_id
        );
    
        return res.json(createdCandidato);
    }
}