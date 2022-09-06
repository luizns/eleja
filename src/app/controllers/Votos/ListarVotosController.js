import ListarVotosService from '../../services/Votos/ListarVotosService';

export default class ListarVotosController {
    constructor() {
        this.service = new ListarVotosService();
    }

    listar(req, res) {
        const votos = this.service.listarTodos();

        return res.json(votos);
    }
}