
import CreateQuantVotoService from '../../../services/Votos/QuantVotos/CreateQuantVotoService';

export default class CreateQuantVotoController {
    
        constructor() {
            this.service = new CreateQuantVotoService();
        }

    async create (req, res){
        const {
            idquantvoto,
            horavoto,
            datavoto
        } = req.body;
    
        const createdQuantVoto = await this.service.create(
            idquantvoto,
            horavoto,
            datavoto
        );
    
        return res.status(200).json(createdQuantVoto);
    }
}