import ApuracaoService from "../../services/Votos/ApuracaoService";

export default class ListAllController {
    constructor() {
        this.service = new ApuracaoService();
    }

    async index(req, res) {

        const apuracao = await this.service.index();

        res.status(200).json(apuracao);
    }
}