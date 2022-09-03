
import CreateRegistroVotoService from '../../../services/Votos/RegistroVotos/CreateRegistroVotoService';

export default class CreateRegistroVotoController {
    
        constructor() {
            this.service = new CreateRegistroVotoService();
        }

    async create (req, res){
        const {
            id_registro_voto_eleitor,
            hora_voto,
            data_voto
        } = req.body;
    
        const createdRegistroVoto = await this.service.create(
            id_registro_voto_eleitor,
            hora_voto,
            data_voto
        );
    
        return res.status(200).json(createdRegistroVoto);
    }
}