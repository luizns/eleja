
import CreatePartidoService from '../../services/Partidos/CreatePartidoService';

export default class CreatePartidoController {
    
        constructor() {
            this.service = new CreatePartidoService();
        }

    create (req, res){
        const {
            id,
            name,
            sigla,
            numeroLegenda
        } = req.body;
    
        const createdPartido = this.service.create(
            id,
            name,
            sigla,
            numeroLegenda
        );
    
        return res.status(200).json(createdPartido.message);
    }
}