import ListZonaService from '../../services/Zonas/ListZonaService';

export default class ListAllController {
    constructor() {
        this.service = new ListZonaService();
    }

    listAll (req, res){
        const zona = this.service.listAll();

        return res.send(zona);
        
    }
}