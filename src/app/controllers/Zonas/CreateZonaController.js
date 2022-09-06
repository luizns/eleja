
import CreateZonaService from '../../services/Zonas/CreateZonaService';

export default class CreateZonaController {
    
        constructor() {
            this.service = new CreateZonaService();
        }

    async create (req, res){
        const {
            idZona,
            secao
        } = req.body;
    
        const createdZona = await this.service.create(
            idZona,
            secao
        );
    
        return res.status(200).json(createdZona);
    }
}