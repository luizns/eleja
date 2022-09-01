
import CreateCandidatoService from '../../services/Candidatos/CreateCandidatoService';

export default class CreateCandidoController {
    
        constructor() {
            this.service = new CreateCandidatoService();
        }

    create (req, res){
        const {
            id,
            name,
            numero,
            idPartido,
            idJuizEleitoral,
            idCandidatoVoto
        } = req.body;
    
        const createdCandidato = this.service.create(
            id,
            name,
            numero,
            idPartido,
            idJuizEleitoral,
            idCandidatoVoto
        );
    
        return res.status(200).json(createdCandidato.message);
    }
}