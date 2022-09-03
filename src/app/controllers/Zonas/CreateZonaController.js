
import CreateZonaService from '../../services/Zonas/CreateZonaService';

export default class CreateZonaController {
    
        constructor() {
            this.service = new CreateZonaService();
        }

    async create (req, res){
        const {
            idzona,
            secao
        } = req.body;
    
        const createdZona = await this.service.create(
            idzona,
            secao
        );
    
        return res.status(200).json(createdZona);
    }
}