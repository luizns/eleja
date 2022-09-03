
import CreateVotoService from '../../services/Votos/CreateVotoService';

export default class CreateVotoController {
    
        constructor() {
            this.service = new CreateVotoService();
        }

    async create (req, res){
        const {
            idVoto,
            idRegVoto,
            idQuantVotos
        } = req.body;
    
        const createdVoto = await this.service.create(
            idVoto,
            idRegVoto,
            idQuantVotos
        );
    
        return res.status(200).json(createdVoto);
    }
}