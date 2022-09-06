import ListPartidosService from '../../services/Partidos/ListPartidoService';

export default class ListAllController {
    constructor() {
        this.service = new ListPartidosService();
    }

    listAll (req, res){
        const partidos = this.service.listAll();

        return res.send(partidos);
    }
}