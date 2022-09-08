import ListZonaService from '../../services/Zonas/ListZonaService';

export default class ListAllController {
    constructor() {
        this.service = new ListZonaService();
    }

   async listAll (req, res){
    const { zona } = req.query;

    const zonas = await this.service.listAll(zona);

    res.json(zonas);
    }
}