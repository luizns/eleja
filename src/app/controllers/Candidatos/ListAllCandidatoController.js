import ListCandidatoService from '../../services/Candidatos/ListCandidatoService';

export default class ListAllController {
    constructor() {
        this.service = new ListCandidatoService();
    }

    listAll (req, res){
        const candidatos = this.service.listAll();

        return res.send(candidatos);
    }
}