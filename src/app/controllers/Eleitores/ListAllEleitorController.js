import ListEleitorService from '../../services/Eleitores/ListEleitorService';

export default class ListAllController {
    constructor() {
        this.service = new ListEleitorService();
    }

    listAll (req, res){
        const eleitor = this.service.listAll();

        return res.send(eleitor);
    }
}