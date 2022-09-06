import ListVotoService from '../../services/Votos/ListVotoService';

export default class ListAllController {
    constructor() {
        this.service = new ListVotoService();
    }

    listAll (req, res){
        const Voto = this.service.listAll();

        return res.send(Voto);
        
    }
}