import ListRegistroVotoService from '../../../services/Votos/RegistroVotos/ListRegistroVotoService';

export default class ListAllController {
    constructor() {
        this.service = new ListRegistroVotoService();
    }

    listAll (req, res){
        const registroVoto = this.service.listAll();

        return res.send(registroVoto);
        
    }
}