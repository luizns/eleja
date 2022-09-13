
import CreatePartidoService from '../../services/Partidos/CreatePartidoService';

export default class CreatePartidoController {
    
        constructor() {
            this.service = new CreatePartidoService();
        }

    async create (req, res){
        const {
            nome_partido,
            sigla,
            numero_legenda
        } = req.body;
    
        const createdPartido = await this.service.create(
            nome_partido,
            sigla,
            numero_legenda
        );
    
        return res.json(createdPartido);
    }
}