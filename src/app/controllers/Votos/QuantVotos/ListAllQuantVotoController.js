import ListQuantVotoService from '../../../services/Votos/QuantVotos/ListQuantVotoService';

export default class ListAllController {
    constructor() {
        this.service = new ListQuantVotoService();
    }

    listAll (req, res){
        const quantvoto = this.service.listAll();

        return res.send(quantvoto);
        
    }
}