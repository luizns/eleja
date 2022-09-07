import ListCandidatoService from '../../services/Candidatos/ListCandidatoService';

export default class ListCandidatoController {
    constructor() {
        this.service = new ListCandidatoService();
    }

    async index(req, res){
        const { nome } = req.query;

        const candidatos = await this.service.listAll(nome);

        res.json(candidatos);
    }
}