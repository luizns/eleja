import ListEleitorService from '../../services/Eleitores/ListEleitorService';

export default class ListEleitorController {
    constructor() {
        this.service = new ListEleitorService();
    }

    async index(req, res){
        const { cpf } = req.query;

        const eleitores = await this.service.listAll(cpf);

        res.json(eleitores);
    }
}