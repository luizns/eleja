
import CreateEleitorService from '../../services/Eleitores/CreateEleitorService';

export default class CreateEleitorController {
    
        constructor() {
            this.service = new CreateEleitorService();
        }

   async create (req, res){
        const {
            idEleitor,
            cpf,
            titulo_eleitor,
            rg,
            idade,
            id_usuario,
            } = req.body;
    
        const createdEleitor = await this.service.create(
            idEleitor,
            cpf,
            titulo_eleitor,
            rg,
            idade,
            id_usuario,
          );
    
        return res.status(200).json(createdEleitor);
    }
}