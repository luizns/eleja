import ListCandidatoService from '../../services/Candidatos/ListCandidatoService';

export default class ListCandidatoController {
    constructor() {
        this.service = new ListCandidatoService();
    }

    async index(req, res){
        const { name } = req.query;

        const candidatos = await this.service.listAll(name);

        res.json(candidatos);
    }
}