
import CreateEleitorService from '../../services/Eleitores/CreateEleitorService';

export default class CreateEleitorController {
    
        constructor() {
            this.service = new CreateEleitorService();
        }

    create (req, res){
        const {
            id,
            cpf,
            titulo,
            rg,
            idUsuario,
            idEleitorVoto
        } = req.body;
    
        const createdEleitor = this.service.create(
            id,
            cpf,
            titulo,
            rg,
            idUsuario,
            idEleitorVoto
        );
    
        return res.status(200).json(createdEleitor.message);
    }
}