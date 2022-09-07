import ListJuizService from '../../services/Juizes/ListJuizService';

export default class ListJuizController {
    constructor() {
        this.service = new ListJuizService();
    }

    async index(req, res){
        const { matricula } = req.query;

        const juizes = await this.service.listAll(matricula);

        res.json(juizes);
    }
}