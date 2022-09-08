import ListVotosService from '../../services/Votos/ListVotosService';

export default class ListVotosController {
    constructor() {
        this.service = new ListVotosService();
    }

    list(req, res) {
        const votos = this.service.listAllVotes();

        return res.json(votos);
    }
}
