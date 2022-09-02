import ListJuizService from '../../services/Juizes/ListJuizService';

export default class ListAllController {
    constructor() {
        this.service = new ListJuizService();
    }

    listAll (req, res){
        const juiz = this.service.listAll();

        return res.send(juiz);
    }
}