
import CreateCandidatoService from '../../services/Candidatos/CreateCandidatoService';

export default class CreateCandidoController {
    
        constructor() {
            this.service = new CreateCandidatoService();
        }

   async create (req, res){
        const {
            idCandidato,
            nome_candidato,
            numero_candidato,
            id_partido,
            id_juiz_eleitoral,
            id_candidato_voto
        } = req.body;
    
        const createdCandidato = await this.service.create(
            idCandidato,
            nome_candidato,
            numero_candidato,
            id_partido,
            id_juiz_eleitoral,
            id_candidato_voto
        );
    
        return res.status(200).json(createdCandidato);
    }
}