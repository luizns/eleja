import ListRegistroVotoService from '../../../services/Votos/RegistroVotos/ListRegistroVotoService';

export default class ListAllController {
    constructor() {
        this.service = new ListRegistroVotoService();
    }

    listAll (req, res){
        const {id_eleitor} = req.query;

        const registroVoto = this.service.listAll(id_eleitor);

        return res.send(registroVoto);
        
    }
}