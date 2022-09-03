
import CreateQuantVotoService from '../../../services/Votos/QuantVotos/CreateQuantVotoService';

export default class CreateQuantVotoController {
    
        constructor() {
            this.service = new CreateQuantVotoService();
        }

    async create (req, res){
        const {
            idquant_votos_candidato,
            hora_voto,
            data_voto
        } = req.body;
    
        const createdQuantVoto = await this.service.create(
            idquant_votos_candidato,
            hora_voto,
            data_voto
        );
    
        return res.status(200).json(createdQuantVoto);
    }
}